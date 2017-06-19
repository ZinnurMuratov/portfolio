'use strict';
const gulp = require('gulp');
const exec = require('child_process').exec;
const colors = require('colors/safe');

gulp.task('dev:webpack', (callback) => {
  let webpackExec = exec('webpack', (err) => { callback(err); });
  webpackExec.stdout.on('data', (data) => {
    console.info(colors.cyan(`@exec.stdout: ${data}`));
  });
  webpackExec.stderr.on('data', (data) => {
    console.info(colors.red(`@exec.stderr: ${data}`));
  });
  webpackExec.on('error', (error) => {
    console.info(colors.red(`@exec.error: ${error}`));
  });
});