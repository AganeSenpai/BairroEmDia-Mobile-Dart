import 'dart:io';

Future<void> main() async {
  final build = await Process.run(
    Platform.resolvedExecutable,
    ['run', 'tool/build.dart'],
  );
  stdout.write(build.stdout);
  stderr.write(build.stderr);
  if (build.exitCode != 0) {
    exitCode = build.exitCode;
    return;
  }
  final assets = Directory('android/app/src/main/assets');
  assets.createSync(recursive: true);
  for (final name in ['index.html', 'styles.css', 'app.dart.js']) {
    File('dist/$name').copySync('${assets.path}/$name');
  }
  stdout.writeln('Conteudo Dart preparado para o APK Android.');
}
