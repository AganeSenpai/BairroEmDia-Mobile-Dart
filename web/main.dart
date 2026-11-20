import 'dart:js_interop';
import 'package:web/web.dart';
import '../lib/models.dart';
import '../lib/presentation.dart';

final solicitacoes = dadosDemonstracao();
final app = document.getElementById('app') as HTMLElement;
final navegacao = document.getElementById('navigation') as HTMLElement;
String selecionada = solicitacoes.first.id;
String filtro = 'todas';
final rascunho = {
  'titulo': '',
  'endereco': '',
  'descricao': '',
  'categoria': ''
};

void main() {
  document.addEventListener('click', aoClicar.toJS);
  document.addEventListener('input', aoPreencher.toJS);
  document.addEventListener('change', aoPreencher.toJS);
  document.addEventListener('submit', aoEnviar.toJS);
  window.addEventListener('hashchange', ((Event evento) => renderizar()).toJS);
  renderizar();
}

void navegar(String rota) {
  if (window.location.hash == '#$rota') {
    renderizar();
  } else {
    window.location.hash = rota;
  }
}

void renderizar() {
  final rota = window.location.hash.replaceFirst('#', '');
  final conteudo = switch (rota) {
    'inicio' => inicio(),
    'nova' => novaSolicitacao(),
    'confirmacao' => confirmacao(),
    'solicitacoes' => listaSolicitacoes(),
    'detalhes' => detalhes(),
    'perfil' => perfil(),
    _ => boasVindas(),
  };
  app.innerHTML = conteudo.toJS;
  navegacao.hidden = (rota.isEmpty || rota == 'boas-vindas').toJS;
  final itens = [
    ('inicio', 'home', 'Início'),
    ('solicitacoes', 'list', 'Solicitações'),
    ('perfil', 'user', 'Perfil')
  ];
  navegacao.innerHTML = itens.map((item) => '''
    <button data-route="${item.$1}" class="${rota == item.$1 ? 'active' : ''}"
      ${rota == item.$1 ? 'aria-current="page"' : ''}>
      ${icone(item.$2)}${item.$3}
    </button>
  ''').join().toJS;
  app.scrollTop = 0;
  document.title =
      '${app.querySelector('h1')?.textContent ?? 'Protótipo'} · Bairro em Dia';
  app.focus();
}

void aoClicar(Event evento) {
  final origem = evento.target as Element;
  final rota = origem.closest('[data-route]');
  if (rota != null) {
    navegar(rota.getAttribute('data-route')!);
    return;
  }
  final item = origem.closest('[data-request]');
  if (item != null) {
    selecionada = item.getAttribute('data-request')!;
    navegar('detalhes');
    return;
  }
  final nova = origem.closest('[data-new]');
  if (nova != null) {
    rascunho['categoria'] = nova.getAttribute('data-new')!;
    navegar('nova');
    return;
  }
  final escolha = origem.closest('[data-filter]');
  if (escolha != null) {
    filtro = escolha.getAttribute('data-filter')!;
    renderizar();
  }
}

String valorCampo(HTMLFormElement formulario, String nome) {
  final campo = formulario.querySelector('[name="$nome"]');
  if (nome == 'categoria') return (campo as HTMLSelectElement).value;
  if (nome == 'descricao') return (campo as HTMLTextAreaElement).value;
  return (campo as HTMLInputElement).value;
}

void aoPreencher(Event evento) {
  final campo = evento.target as Element;
  final formulario = campo.closest('#request-form');
  if (formulario == null) return;
  for (final nome in rascunho.keys) {
    rascunho[nome] = valorCampo(formulario as HTMLFormElement, nome);
  }
}

void aoEnviar(Event evento) {
  final formulario = evento.target as HTMLFormElement;
  if (formulario.id != 'request-form') return;
  evento.preventDefault();
  final valores = {
    for (final nome in rascunho.keys) nome: valorCampo(formulario, nome).trim(),
  };
  if (valores.values.any((valor) => valor.isEmpty) ||
      !categorias.any((categoria) => categoria.id == valores['categoria'])) {
    document.getElementById('form-error')!.textContent =
        'Preencha os campos para registrar a solicitação.';
    return;
  }
  final agora = DateTime.now();
  const meses = [
    'jan',
    'fev',
    'mar',
    'abr',
    'mai',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dez'
  ];
  final data = '${agora.day} ${meses[agora.month - 1]} ${agora.year}';
  final id =
      'BED-${agora.year}-${(solicitacoes.length + 143).toString().padLeft(4, '0')}';
  solicitacoes.insert(
      0,
      Solicitacao(
        id: id,
        titulo: valores['titulo']!,
        descricao: valores['descricao']!,
        endereco: valores['endereco']!,
        categoria: valores['categoria']!,
        status: StatusSolicitacao.aberta,
        data: data,
        atualizacao: data,
      ));
  selecionada = id;
  rascunho.updateAll((nome, valor) => '');
  navegar('confirmacao');
}

Solicitacao get atual =>
    solicitacoes.firstWhere((item) => item.id == selecionada);

String boasVindas() => '''
<section class="screen welcome">
  <span class="brand-mark" aria-hidden="true">b.</span>
  <h1>Seu bairro.<br>Nosso cuidado.</h1>
  <p>Registre o que precisa de atenção e acompanhe cada passo da mudança.</p>
  <div class="neighborhood" aria-hidden="true">
    <span class="sun"></span>
    ${[
      'one',
      'two',
      'three',
      'four'
    ].map((nome) => '<div class="building $nome">${'<i></i>' * 6}</div>').join()}
    <div class="ground"></div>
  </div>
  <div class="welcome-bottom">
    <button class="primary light" data-route="inicio">Conhecer o aplicativo</button>
    <small>Explore uma jornada com dados de demonstração.</small>
  </div>
</section>
''';

String inicio() {
  final abertas = solicitacoes
      .where((item) => item.status != StatusSolicitacao.resolvida)
      .length;
  final resolvidas = solicitacoes.length - abertas;
  return '''
<section class="screen">
  <header class="row">
    <div><p class="eyebrow">Olá, morador</p><h1>Vamos cuidar<br>do nosso bairro?</h1></div>
    <button class="icon-button avatar" data-route="perfil" aria-label="Abrir perfil">MC</button>
  </header>
  <div class="hero">
    <h2>Uma pequena atitude.<br>Um bairro melhor.</h2>
    <p>Viu algo que precisa de cuidado? Sua solicitação faz a diferença.</p>
    <button class="primary light" data-new="">${icone('plus')}Nova solicitação</button>
  </div>
  <div class="stats">
    <div class="stat"><span>Em acompanhamento</span><strong>$abertas</strong><span>solicitações suas</span></div>
    <div class="stat"><span>Concluídas</span><strong>$resolvidas</strong><span>problemas resolvidos</span></div>
  </div>
  <h2 class="section-heading">O que precisa de atenção?</h2>
  <div class="category-grid">
    ${categorias.map((categoria) => '<button class="category" data-new="${categoria.id}">${icone(categoria.icone)}${categoria.nome}</button>').join()}
  </div>
  <div class="row section-heading"><h2>Última atualização</h2><button class="text-button" data-route="solicitacoes">Ver todas</button></div>
  ${cartaoSolicitacao(solicitacoes.first)}
</section>
''';
}

String novaSolicitacao() => '''
<section class="screen">
  ${voltar('inicio')}
  <p class="eyebrow">Cuidar começa por aqui</p><h1>Nova solicitação</h1>
  <p class="subtitle">Conte o que aconteceu e onde o problema está.</p>
  <form id="request-form">
    <label class="field">Categoria
      <select name="categoria" required>
        <option value="">Selecione uma categoria</option>
        ${categorias.map((categoria) => '<option value="${categoria.id}" ${rascunho['categoria'] == categoria.id ? 'selected' : ''}>${categoria.nome}</option>').join()}
      </select>
    </label>
    <label class="field">Título
      <input aria-label="Título" name="titulo" maxlength="120" required placeholder="Ex.: Poste apagado na praça" value="${seguro(rascunho['titulo']!)}">
    </label>
    <label class="field">Localização
      <input aria-label="Localização" name="endereco" maxlength="250" required placeholder="Rua, número e bairro" value="${seguro(rascunho['endereco']!)}">
    </label>
    <label class="field">Descrição
      <textarea aria-label="Descrição" name="descricao" maxlength="2000" required placeholder="Descreva o problema e uma referência do local">${seguro(rascunho['descricao']!)}</textarea>
      <small>Evite incluir dados pessoais na descrição.</small>
    </label>
    <div class="notice">Sua solicitação receberá um protocolo para acompanhamento.</div>
    <p id="form-error" class="form-error" role="alert"></p>
    <button type="submit" class="primary">Enviar solicitação</button>
  </form>
</section>
''';

String confirmacao() => '''
<section class="screen success">
  <div class="icon success-symbol">${icone('check')}</div>
  <p class="eyebrow">Primeiro passo dado</p><h1>Solicitação registrada!</h1>
  <p class="subtitle">Agora você pode acompanhar o andamento pelo seu protocolo.</p>
  <div class="card">
    <p class="eyebrow">Seu protocolo</p><h2>${atual.id}</h2>
    <span class="detail-label">Problema registrado</span><p class="detail-value">${seguro(atual.titulo)}</p>
    <span class="detail-label">Status</span>${etiqueta(atual.status)}
  </div>
  <button class="primary" data-request="${atual.id}">Acompanhar solicitação</button>
  <button class="secondary" data-route="inicio">Voltar ao início</button>
  <p class="subtitle" style="font-size:13px;margin-top:20px">Registro simulado para demonstração do protótipo.</p>
</section>
''';

String listaSolicitacoes() {
  final visiveis = solicitacoes
      .where((item) => filtro == 'todas' || item.status.name == filtro);
  final filtros = [
    ('todas', 'Todas'),
    ('aberta', 'Abertas'),
    ('emAtendimento', 'Em atendimento'),
    ('resolvida', 'Resolvidas')
  ];
  return '''
<section class="screen">
  <p class="eyebrow">Cada cuidado conta</p><h1>Minhas solicitações</h1>
  <p class="subtitle">Acompanhe o que você já registrou.</p>
  <div class="chips" role="group" aria-label="Filtrar solicitações">
    ${filtros.map((item) => '<button class="chip ${filtro == item.$1 ? 'active' : ''}" data-filter="${item.$1}" aria-pressed="${filtro == item.$1}">${item.$2}</button>').join()}
  </div>
  ${visiveis.isEmpty ? '<div class="empty">Nenhuma solicitação nesta situação.</div>' : visiveis.map(cartaoSolicitacao).join()}
  <button class="secondary" data-new="">${icone('plus')}Registrar outro problema</button>
</section>
''';
}

String detalhes() => '''
<section class="screen">
  ${voltar('solicitacoes')}
  <div class="row"><p class="eyebrow">${atual.id}</p>${etiqueta(atual.status)}</div>
  <h1>${seguro(atual.titulo)}</h1>
  <p class="subtitle">${nomeCategoria(atual.categoria)} · ${atual.data}</p>
  <div class="card">
    <h2>Sobre a solicitação</h2>
    <span class="detail-label">Localização</span><p class="detail-value">${seguro(atual.endereco)}</p>
    <span class="detail-label">Descrição</span><p class="detail-value">${seguro(atual.descricao)}</p>
  </div>
  <h2>Andamento</h2>
  <ol class="timeline">
    <li><strong>Solicitação recebida</strong><small>${atual.data} · Protocolo gerado para acompanhamento.</small></li>
    ${atual.status == StatusSolicitacao.aberta ? '<li><strong>Aguardando atendimento</strong><small>O próximo passo será exibido aqui.</small></li>' : '<li><strong>Equipe em atendimento</strong><small>${atual.atualizacao} · Solicitação encaminhada para a equipe responsável.</small></li>'}
    ${atual.status == StatusSolicitacao.resolvida ? '<li><strong>Problema resolvido</strong><small>${atual.atualizacao} · Atendimento concluído.</small></li>' : ''}
  </ol>
  <button class="secondary" data-route="solicitacoes">Ver minhas solicitações</button>
</section>
''';

String perfil() => '''
<section class="screen">
  <h1>Meu perfil</h1>
  <div class="profile-heading"><div class="icon-button avatar profile-avatar">MC</div><h2>Morador do Centro</h2><p class="subtitle">Perfil de demonstração</p></div>
  <div class="card">
    <div class="profile-option"><span>Bairro</span><strong>Centro</strong></div>
    <div class="profile-option"><span>Solicitações registradas</span><strong>${solicitacoes.length}</strong></div>
    <div class="profile-option"><span>Participação</span><strong>Cidadão</strong></div>
  </div>
  <h2>Sobre o Bairro em Dia</h2>
  <p class="subtitle">Um canal simples para registrar problemas de zeladoria urbana e acompanhar o cuidado com os espaços públicos.</p>
  <div class="notice">Conectado ao ODS 11 — Cidades e comunidades sustentáveis.</div>
  <button class="secondary" data-route="boas-vindas">${icone('exit')}Sair da demonstração</button>
</section>
''';
