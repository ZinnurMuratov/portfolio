'use strict';
const gulp = require('gulp');
const del = require('del');

gulp.task('dev:del', () => {
  return del('.dev');
});