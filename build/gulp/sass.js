'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

gulp.task('dev:sass', () => {
  gulp.src('client/assets/styles/*.scss')
    .pipe(
      sass().on('error', sass.logError)
    )
    .pipe(gulp.dest('.dev/client/assets/styles/'));
});

gulp.task('dev:css:prefix', () => {
  gulp.src('.dev/css/styles/**/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('.dev/client/assets/styles/'));
});

gulp.task('dev:styles', ['dev:sass']);