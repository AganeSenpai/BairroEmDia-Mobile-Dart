import 'dart:io';

Future<void> main(List<String> args) async {
  final porta = args.isEmpty ? 8081 : int.parse(args.first);
  final raiz = Directory('dist').absolute;
  if (!File('${raiz.path}/app.dart.js').existsSync()) {
    stderr.writeln('Execute dart run tool/build.dart antes de iniciar.');
    exitCode = 1;
    return;
  }
  final servidor = await HttpServer.bind(InternetAddress.loopbackIPv4, porta);
  stdout.writeln('Protótipo em http://localhost:$porta');
  await for (final requisicao in servidor) {
    try {
      final caminho = requisicao.uri.path == '/'
          ? 'index.html'
          : requisicao.uri.path.substring(1);
      if (caminho.split('/').any((parte) => parte == '..') ||
          caminho.contains('\\')) {
        requisicao.response.statusCode = HttpStatus.badRequest;
      } else {
        final arquivo = File('${raiz.path}/$caminho');
        if (!await arquivo.exists()) {
          requisicao.response.statusCode = HttpStatus.notFound;
        } else {
          final tipo = caminho.endsWith('.js')
              ? 'application/javascript'
              : caminho.endsWith('.css')
                  ? 'text/css'
                  : 'text/html';
          requisicao.response.headers
              .set(HttpHeaders.contentTypeHeader, '$tipo; charset=utf-8');
          await requisicao.response.addStream(arquivo.openRead());
        }
      }
    } catch (_) {
      requisicao.response.statusCode = HttpStatus.internalServerError;
    } finally {
      await requisicao.response.close();
    }
  }
}
