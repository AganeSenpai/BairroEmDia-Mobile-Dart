import 'dart:convert';
import 'models.dart';

const icones = {
  'home': '<path d="m3 10 9-7 9 7v10H3z"/><path d="M9 20v-7h6v7"/>',
  'list':
      '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 3h6v4H9zM9 12h6M9 16h6"/>',
  'user': '<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',
  'plus': '<path d="M12 5v14M5 12h14"/>',
  'back': '<path d="m14 6-6 6 6 6"/>',
  'lamp': '<path d="M9 18h6M10 21h4M8 13a6 6 0 1 1 8 0l-1 2H9z"/>',
  'road': '<path d="M8 3 4 21M16 3l4 18M12 4v3M12 11v3M12 18v3"/>',
  'clean': '<path d="M4 7h16M9 4h6M6 7l1 14h10l1-14M10 11v6M14 11v6"/>',
  'check': '<path d="m5 12 4 4L19 6"/>',
  'exit': '<path d="M10 4H4v16h6M9 12h12m-5-5 5 5-5 5"/>',
};

String seguro(String valor) => const HtmlEscape().convert(valor);

String icone(String nome) =>
    '<span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24">${icones[nome] ?? ''}</svg></span>';

String nomeCategoria(String id) =>
    categorias.firstWhere((categoria) => categoria.id == id).nome;

String nomeStatus(StatusSolicitacao status) => switch (status) {
      StatusSolicitacao.aberta => 'Aberta',
      StatusSolicitacao.emAtendimento => 'Em atendimento',
      StatusSolicitacao.resolvida => 'Resolvida',
    };

String etiqueta(StatusSolicitacao status) {
  final estilo = switch (status) {
    StatusSolicitacao.aberta => 'open',
    StatusSolicitacao.emAtendimento => 'progress',
    StatusSolicitacao.resolvida => 'done',
  };
  return '<span class="badge $estilo">${nomeStatus(status)}</span>';
}

String voltar(String rota) =>
    '<button class="icon-button back" data-route="$rota" aria-label="Voltar">${icone('back')}</button>';

String cartaoSolicitacao(Solicitacao item) => '''
<button class="request" data-request="${item.id}">
  <span class="request-top"><span>${item.id}</span>${etiqueta(item.status)}</span>
  <h3>${seguro(item.titulo)}</h3>
  <p>${seguro(item.endereco)}</p>
</button>
''';
