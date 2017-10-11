'user strict';
const gulp = require('gulp');
const sequence = require('run-sequence');

gulp.task('run', (callback) => {
  return sequence(
    'del',
    'inject:all',
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
    'inject:all',
    'copy:all',
    cb
  );
});
