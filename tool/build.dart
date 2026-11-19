import 'dart:io';

Future<void> main() async {
  final destino = Directory('dist')..createSync(recursive: true);
  for (final nome in ['index.html', 'styles.css']) {
    File('web/$nome').copySync('${destino.path}/$nome');
  }
  final resultado = await Process.run(
    Platform.resolvedExecutable,
    [
      'compile',
      'js',
      '-O2',
      '--no-source-maps',
      'web/main.dart',
      '-o',
      'dist/app.dart.js'
    ],
  );
  stdout.write(resultado.stdout);
  stderr.write(resultado.stderr);
  exitCode = resultado.exitCode;
}
