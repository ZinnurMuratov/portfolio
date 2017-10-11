'user strict';
const gulp = require('gulp');
const del = require('del');

const config = require('./config');

gulp.task('del', () => {
  return del(config.buildPath);
});