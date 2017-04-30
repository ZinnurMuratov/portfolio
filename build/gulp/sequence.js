'user strict';
const gulp = require('gulp');
const sequence = require('run-sequence');

gulp.task('run', (callback) => {
  sequence(
    'dev:del',
    'lint', ['dev:nodemon', 'dev:copy'],
    'dev:watch',
    callback
  );
});