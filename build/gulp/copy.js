'use strict';
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');

gulp.task('dev:copy:ejs', () => {
  gulp.src('server/views/**/*.ejs')
    .pipe(plumber())
    .pipe(gulp.dest('.dev/server/views/'));
});

gulp.task('dev:copy:images', () => {
  gulp.src('client/assets/images/**/*.{jpg,png,gif}')
    .pipe(plumber())
    .pipe(imagemin())
    .pipe(gulp.dest('.dev/client/assets/images'));
});

gulp.task('dev:copy', [
  'dev:copy:ejs',
  'dev:copy:images'
]);