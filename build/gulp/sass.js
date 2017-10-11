'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const moduleImporter = require('sass-module-importer');

const config = require('./config');

gulp.task('sass', () => {
  gulp.src('client/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      importer: moduleImporter(),
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(`${config.buildPath}/client/assets/styles/`));
});

gulp.task('css:prefix', () => {
  gulp.src('.dev/css/styles/main.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest(`${config.buildPath}/client/assets/styles/`));
});

gulp.task('dev:styles', ['sass']);
