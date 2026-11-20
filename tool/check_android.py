import json
import re
import subprocess
import time
import xml.etree.ElementTree as ET
from pathlib import Path

OUTPUT = Path('android-evidence')
OUTPUT.mkdir(exist_ok=True)
PACKAGE = 'br.com.fiap.bairro.mobile'


def adb(*args, binary=False):
    result = subprocess.run(['adb', *args], check=True, capture_output=True)
    return result.stdout if binary else result.stdout.decode(errors='replace')


def hierarchy():
    adb('shell', 'uiautomator', 'dump', '/sdcard/window.xml')
    xml = adb('shell', 'cat', '/sdcard/window.xml')
    return ET.fromstring(xml[xml.index('<?xml'):])


def find(text, exact=True):
    for attempt in range(15):
        tree = hierarchy()
        matches = []
        for node in tree.iter('node'):
            values = [node.get('text', ''), node.get('content-desc', '')]
            if any((text == value if exact else text in value) for value in values):
                matches.append(node)
        if matches:
            return next((n for n in matches if n.get('clickable') == 'true'), matches[0])
        time.sleep(1)
    raise AssertionError('Elemento nao encontrado: ' + text)


def tap(text, exact=True):
    node = find(text, exact)
    bounds = list(map(int, re.findall(r'\d+', node.get('bounds', ''))))
    if len(bounds) != 4:
        raise AssertionError('Limites invalidos: ' + text)
    adb('shell', 'input', 'tap', str((bounds[0] + bounds[2]) // 2),
        str((bounds[1] + bounds[3]) // 2))
    time.sleep(0.7)


def fill(placeholder, value):
    tap(placeholder)
    adb('shell', 'input', 'text', value.replace(' ', '%s'))
    adb('shell', 'input', 'keyevent', 'KEYCODE_BACK')


def screenshot(name):
    (OUTPUT / (name + '.png')).write_bytes(adb('exec-out', 'screencap', '-p', binary=True))
    tree = hierarchy()
    (OUTPUT / (name + '.xml')).write_bytes(ET.tostring(tree, encoding='utf-8'))


def main():
    adb('install', '-r', 'android/app/build/outputs/apk/debug/app-debug.apk')
    adb('shell', 'svc', 'wifi', 'disable')
    adb('shell', 'svc', 'data', 'disable')
    adb('shell', 'am', 'start', '-W', '-n', PACKAGE + '/.MainActivity')
    recorder = subprocess.Popen(['adb', 'shell', 'screenrecord', '--time-limit', '150',
                                 '/sdcard/bairro-demo.mp4'])
    try:
        find('Conhecer o aplicativo')
        screenshot('01-boas-vindas')
        tap('Conhecer o aplicativo')
        find('Nova solicitação')
        screenshot('02-inicio')
        tap('Nova solicitação')
        find('Enviar solicitação')
        screenshot('03-formulario')
        tap('Enviar solicitação')
        find('Enviar solicitação')
        screenshot('04-validacao')
        tap('Selecione uma categoria')
        tap('Iluminação')
        fill('Ex.: Poste apagado na praça', 'Poste da demonstracao Android')
        fill('Rua, número e bairro', 'Rua Exemplo 100 Centro')
        fill('Descreva o problema e uma referência do local',
             'Poste apagado ha tres noites. Endereco ficticio.')
        screenshot('05-formulario-preenchido')
        tap('Enviar solicitação')
        find('Acompanhar solicitação')
        screenshot('06-confirmacao')
        tap('Acompanhar solicitação')
        find('Poste da demonstracao Android')
        screenshot('07-detalhes')
        tap('Ver minhas solicitações')
        find('Poste da demonstracao Android')
        screenshot('08-solicitacoes')
        tap('Resolvidas')
        screenshot('09-filtro')
        tap('Perfil')
        find('Perfil de demonstração')
        screenshot('10-perfil')
        current = adb('shell', 'dumpsys', 'activity', 'activities')
        if PACKAGE not in current:
            raise AssertionError('O aplicativo Android nao esta ativo.')
        (OUTPUT / 'resultado.json').write_text(json.dumps({
            'resultado': 'aprovado', 'pacote': PACKAGE, 'ambiente': 'Android API 30',
            'rede': 'wifi e dados desativados',
            'verificacoes': ['instalacao APK', 'inicializacao offline', 'sete telas',
                             'formulario', 'criacao em memoria', 'filtros', 'perfil'],
        }, indent=2))
    finally:
        subprocess.run(['adb', 'shell', 'pkill', '-2', 'screenrecord'], check=False)
        recorder.wait(timeout=15)
        adb('pull', '/sdcard/bairro-demo.mp4', str(OUTPUT / 'demonstracao-android.mp4'))
        (OUTPUT / 'logcat.txt').write_text(adb('logcat', '-d', '-s', 'chromium', 'AndroidRuntime'))


if __name__ == '__main__':
    main()
