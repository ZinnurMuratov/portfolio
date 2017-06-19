'use strict';
const gulp = require('gulp');
const exec = require('child_process').exec;

gulp.task('dev:webpack', (callback) => {
  return exec('webpack', (err, stdout, stderr) => {
    console.info(stdout);
    console.error(stderr);
    callback(err);
  });
});