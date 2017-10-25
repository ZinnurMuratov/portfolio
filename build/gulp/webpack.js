'use strict';
const gulp = require('gulp');
const webpack = require('webpack');
const gulpWebpack = require('gulp-webpack');

const config = require('./config');
const configWebpack = require('./../webpack/webpack.config.prod');

gulp.task('webpack:prod', () => {
  return gulp.src('client/main.ts')
    .pipe(gulpWebpack(configWebpack, webpack))
    .pipe(gulp.dest(`${config.buildPath}/client/scripts`));
});
