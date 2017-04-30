'user strict';
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('dev:nodemon', ['dev:typescript:server'], () => {
  nodemon({
    script: '.dev/server/server.js',
    watch: '.dev/server/'
  });
});