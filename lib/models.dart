enum StatusSolicitacao { aberta, emAtendimento, resolvida }

class Categoria {
  const Categoria(this.id, this.nome, this.icone);

  final String id;
  final String nome;
  final String icone;
}

class Solicitacao {
  const Solicitacao({
    required this.id,
    required this.titulo,
    required this.descricao,
    required this.endereco,
    required this.categoria,
    required this.status,
    required this.data,
    required this.atualizacao,
  });

  final String id;
  final String titulo;
  final String descricao;
  final String endereco;
  final String categoria;
  final StatusSolicitacao status;
  final String data;
  final String atualizacao;
}

const categorias = [
  Categoria('iluminacao', 'Iluminação', 'lamp'),
  Categoria('vias', 'Vias públicas', 'road'),
  Categoria('limpeza', 'Limpeza', 'clean'),
];

List<Solicitacao> dadosDemonstracao() => [
      const Solicitacao(
        id: 'BED-2026-0142',
        titulo: 'Poste apagado na praça',
        descricao:
            'O poste próximo à entrada da praça está apagado há três noites.',
        endereco: 'Rua das Flores, 120 · Centro',
        categoria: 'iluminacao',
        status: StatusSolicitacao.emAtendimento,
        data: '18 nov 2026',
        atualizacao: '19 nov 2026',
      ),
      const Solicitacao(
        id: 'BED-2026-0138',
        titulo: 'Calçada danificada',
        descricao:
            'Um trecho da calçada está quebrado perto do ponto de ônibus.',
        endereco: 'Av. dos Ipês, 35 · Centro',
        categoria: 'vias',
        status: StatusSolicitacao.aberta,
        data: '17 nov 2026',
        atualizacao: '17 nov 2026',
      ),
      const Solicitacao(
        id: 'BED-2026-0121',
        titulo: 'Descarte irregular',
        descricao: 'Entulho descartado ao lado da praça do bairro.',
        endereco: 'Praça do Sol · Centro',
        categoria: 'limpeza',
        status: StatusSolicitacao.resolvida,
        data: '12 nov 2026',
        atualizacao: '16 nov 2026',
      ),
    ];
