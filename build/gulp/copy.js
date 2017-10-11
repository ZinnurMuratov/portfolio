'use strict';
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('copy:ejs', () => {
  gulp.src('server/views/**/*.ejs')
    .pipe(gulp.dest('.dev/server/views/'));
});

gulp.task('copy:images', () => {
  gulp.src('client/assets/images/**/*.{jpg,png,gif}')
    .pipe(imagemin())
    .pipe(gulp.dest('.dev/client/assets/images'));
});

gulp.task('copy:all', [
  'copy:ejs',
  'copy:images'
]);
