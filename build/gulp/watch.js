'use strict';
const gulp = require('gulp');

gulp.task('dev:watch:server', () => {
  gulp.watch('server/**/*.ts', ['typescript:server']);
});

gulp.task('dev:watch:views', () => {
  gulp.watch('server/**/*.ejs', ['copy:ejs']);
});

gulp.task('dev:watch:assets:images', () => {
  gulp.watch('client/assets/images/', ['copy:images']);
});

gulp.task('dev:watch:sass', () => {
  gulp.watch([
    'client/assets/styles/**/*.scss',
    'client/components/**/*.scss',
    'client/main.scss'
  ], ['sass']);
});

gulp.task('dev:watch:sass:injector', () => {
  gulp.watch('client/components/**/*.scss', ['inject:component:scss']);
});

gulp.task('dev:watch', [
  'dev:watch:assets:images',
  'dev:watch:server',
  'dev:watch:views',
  'dev:watch:sass',
  'dev:watch:sass:injector',
]);
