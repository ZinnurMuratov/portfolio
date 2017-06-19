'use strict';

const gulp = require('gulp');
const path = require('path');
const webpack = require('gulp-webpack');
const webpackConfig = require( path.join(__dirname, './../../webpack.config.js') );

gulp.task('dev:webpack', () => {
  return gulp.src('./client/main.ts')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('.dev/client'));
});