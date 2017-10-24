'user strict';
const gulp = require('gulp');
const sequence = require('run-sequence');

gulp.task('run', (callback) => {
  return sequence(
    'del',
    'inject:component:scss',
    'lint:all', [
      'dev:nodemon',
      'copy:all',
      'sass'
    ],
    'dev:watch',
    callback
  );
});


gulp.task('build', (cb) => {
  return sequence(
    'del',
    'webpack:prod',
    'inject:component:scss', 'sass',
    'copy:all',
    'typescript:server',
    cb
  );
});
