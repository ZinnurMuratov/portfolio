'user strict';
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

const config = require('./config');

gulp.task('dev:nodemon', ['dev:typescript:server'], () => {
  nodemon({
    script: `${config.buildPath}server/server.js`,
    watch: `${config.buildPath}server`,
  });
});
