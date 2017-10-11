'user strict';
const gulp = require('gulp');

gulp.task('dev:watch:server', () => {
  gulp.watch('server/**/*.ts', ['dev:typescript:server']);
});

gulp.task('dev:watch:views', () => {
  gulp.watch('server/**/*.ejs', ['copy:ejs']);
});

gulp.task('dev:watch:server:lint', () => {
  gulp.watch('server/**/*.ts', ['tslint:server']);
});

gulp.task('dev:watch:client:lint', () => {
  gulp.watch('client/**/*.ts', ['tslint:client']);
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

gulp.task('dev:watch:css', () => {
  gulp.watch('.dev/client/assets/styles/main.css', ['css:prefix']);
});


gulp.task('dev:watch', [
  'dev:watch:server:lint',
  'dev:watch:assets:images',
  'dev:watch:server',
  'dev:watch:views',
  'dev:watch:sass',
  'dev:watch:sass:injector',
  'dev:watch:css',
]);
