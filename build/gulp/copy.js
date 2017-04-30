'use strict';
const gulp = require('gulp');

gulp.task('dev:copy:ejs', () => {
  gulp.src('server/views/**/*.ejs')
    .pipe(gulp.dest('.dev/server/views/'));
});

gulp.task('dev:copy', ['dev:copy:ejs']);