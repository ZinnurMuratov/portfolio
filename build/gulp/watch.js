'user strict';
const gulp = require('gulp');
const spawn = require('child_process').spawn;
const colors = require('colors/safe');

gulp.task('dev:watch:server', () => {
  gulp.watch('server/**/*.ts', ['dev:typescript:server']);
});

gulp.task('dev:watch:views', () => {
  gulp.watch('server/**/*.ejs', ['dev:copy:ejs']);
});

gulp.task('dev:watch:server:lint', () => {
  gulp.watch('server/**/*.ts', ['tslint:server']);
});

gulp.task('dev:watch:client:lint', () => {
  gulp.watch('client/**/*.ts', ['tslint:client']);
});

gulp.task('dev:watch:sass', () => {
  gulp.watch('client/assets/styles/**/*.scss', ['dev:sass']);
});

gulp.task('dev:watch:css', () => {
  gulp.watch('.dev/client/assets/styles/**/*.css', ['dev:css:prefix']);
});


gulp.task('dev:watch', [
  'dev:watch:server:lint',
  'dev:watch:server',
  'dev:watch:views',
  'dev:watch:sass',
  'dev:watch:css',
]);