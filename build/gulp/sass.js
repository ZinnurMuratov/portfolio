'use strict';
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const gulpIf = require('gulp-if');
const gulpRev = require('gulp-rev');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cssNano = require('gulp-cssnano');
const moduleImporter = require('sass-module-importer');

const config = require('./config');

gulp.task('sass', () => {
  return gulp.src('client/main.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      importer: moduleImporter(),
    }).on('error', sass.logError))
    .pipe(gulpIf(config.prod, autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    })))
    .pipe(gulpIf(config.prod, cssNano()))
    .pipe(gulpIf(config.prod, gulpRev()))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(`${config.buildPath}/client/styles/`));
});
