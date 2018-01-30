'use strict';
const gulp = require('gulp');
const del = require('del');
const { exec } = require('child_process');

const config = require('./config');

gulp.task('del', () => {
  return del(config.buildPath);
});

gulp.task('mv:build', (cb) => {
  exec('rm -rf .dist && mv .tmp .dist', (err, stdout, stderror) => {
    cb(err);
  });
});
