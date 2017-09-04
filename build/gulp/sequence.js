'use strict';
const gulp = require('gulp');
const sequence = require('run-sequence');

gulp.task('run', (callback) => {
  sequence(
    'dev:del',
    'dev:inject',
    'lint', [
      'dev:nodemon',
      'dev:copy',
      'dev:styles'
    ],
    'dev:watch',
    callback
  );
});
