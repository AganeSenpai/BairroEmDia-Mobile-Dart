# Bairro em Dia

Joao Vitor Valaitis Paulo RM:576724

Protótipo para moradores registrarem problemas de zeladoria urbana e acompanharem solicitações. Relacionado ao ODS 11, Cidades e comunidades sustentáveis.

## Aplicativo Android

A lógica e a navegação são implementadas em Dart, sem Flutter. O APK carrega o conteúdo compilado em uma WebView interna e funciona offline. A pasta `android` contém o código Android necessário para iniciar essa interface. Trata-se de um aplicativo híbrido, não de uma interface Android nativa escrita em Dart.

Requisitos para compilar: Dart SDK 3.14.1, JDK 17, Android SDK 35 e Gradle 8.13.

```bash
dart pub get
dart analyze
dart run tool/prepare_android.dart
gradle -p android assembleDebug
```

APK: `android/app/build/outputs/apk/debug/app-debug.apk`.

Com um emulador Android iniciado ou dispositivo conectado:

```bash
adb install -r android/app/build/outputs/apk/debug/app-debug.apk
adb shell am start -n br.com.fiap.bairro.mobile/.MainActivity
```

Também é possível abrir a pasta `android` no Android Studio após preparar o conteúdo Dart. Configure o Gradle local 8.13 se o Android Studio solicitar a distribuição.

O GitHub Actions gera o APK e executa uma verificação no emulador. O APK fica no artefato `BairroEmDia-Android-APK`. Os resultados, capturas e gravação da verificação ficam em `BairroEmDia-Android-Evidencias` quando a execução termina.

## Telas

Boas-vindas, início, nova solicitação, confirmação, minhas solicitações, detalhes e perfil. Os dados são simulados e reiniciam quando a interface é recarregada. O protótipo não consome a API Java.

## Vídeo

Link a adicionar após a gravação no aplicativo instalado em emulador ou dispositivo. Confirmar com o professor a aceitação da arquitetura híbrida com WebView para o escopo solicitado em Dart sem Flutter.
