'use strict';
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const typescript = require('gulp-typescript');

gulp.task('dev:typescript:server', () => {
  return gulp.src('server/**/*.ts')
    .pipe(plumber())
    .pipe(typescript({
      noImplicitAny: true,
    }))
    .pipe(gulp.dest('.dev/server'));
});