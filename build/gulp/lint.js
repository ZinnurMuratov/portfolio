'use strict';
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const gulpIf = require('gulp-if');
const tslint = require('gulp-tslint');
const eslint = require('gulp-eslint');

let isFixed = function(file) {
  return file.eslint !== null && file.eslint.fixed;
};

gulp.task('eslint:build', () => {
  return gulp.src(['build/**/*.js'])
    .pipe(plumber())
    .pipe(eslint({
      configFile: '.eslintrc.json',
      fix: true
    }))
    .pipe(eslint.format())
    .pipe(gulpIf(
      isFixed, gulp.dest('build')
    ));
});

gulp.task('tslint:server', () => {
  return gulp.src(['server/**/*.ts'])
    .pipe(plumber())
    .pipe(tslint({
      configuration: 'tslint.json',
      formatter: 'verbose',
      fix: true
    }))
    .pipe(tslint.report({
      emitError: false
    }));
});

gulp.task('tslint:client', () => {
  return gulp.src(['client/**/*.ts'])
    .pipe(plumber())
    .pipe(tslint({
      configuration: 'tslint.json',
      formatter: 'verbose',
      fix: true
    }))
    .pipe(tslint.report({
      emitError: false
    }));
});

gulp.task('lint', ['eslint:build', 'tslint:client', 'tslint:server']);