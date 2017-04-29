'user strict';
const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const nodemon = require('gulp-nodemon');

gulp.task('dev:typescript:server', () => {
  return gulp.src('server/**/*.ts')
    .pipe(typescript({
      noImplicitAny: true,
    }))
    .pipe(gulp.dest('.dev/server'));
})

gulp.task('dev:watch:server', () => {
  gulp.watch('server/**/*.ts', ['dev:typescript:server']);
})

gulp.task('dev:del', () => {
  return del('.dev');
})

gulp.task('dev:nodemon', ['dev:typescript:server'], () => {
  nodemon({
    script: '.dev/server/server.js',
    watch: '.dev/server/'
  })
})

gulp.task('run', ['dev:del', 'dev:watch:server', 'dev:nodemon']);