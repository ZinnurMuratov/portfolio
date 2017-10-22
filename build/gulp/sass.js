'use strict';
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const moduleImporter = require('sass-module-importer');

const config = require('./config');

gulp.task('sass', () => {
  return gulp.src('client/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      importer: moduleImporter(),
    }).on('error', sass.logError))
    .pipe(gulpIf(config.prod, autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    })))
    .pipe(gulpIf(config.prod, cleanCSS()))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(`${config.buildPath}/client/assets/styles/`));
});

gulp.task('dev:styles', ['sass']);
