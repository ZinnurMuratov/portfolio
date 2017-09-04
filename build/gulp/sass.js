'use strict';
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const moduleImporter = require('sass-module-importer');

gulp.task('dev:sass', () => {
  gulp.src('client/main.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        importer: moduleImporter()
      }).on('error', sass.logError)
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('.dev/client/assets/styles/'));
});

gulp.task('dev:css:prefix', () => {
  gulp.src('.dev/css/styles/main.css')
    .pipe(plumber())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('.dev/client/assets/styles/'));
});

// gulp task to remove scss comments

gulp.task('dev:styles', ['dev:sass']);
