'use strict';
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const gulpIf = require('gulp-if');
const tslint = require('gulp-tslint');
const eslint = require('gulp-eslint');
const sassLint = require('gulp-sass-lint');

let isFixed = function (file) {
  return file.eslint !== null && file.eslint.fixed;
};

gulp.task('lint:sass', () => {
  return gulp.src(['client/**/*.scss'])
    .pipe(plumber())
    .pipe(sassLint({
      configFile: 'client/.sass-lint.yml',
      options: {
        ignore: 'node_modules/**/*',
        fix: true,
      }
    }))
    .pipe(sassLint.format())
    .pipe(gulp.dest('client/'));
});

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

gulp.task('tslint:all', () => {
  return gulp.src(['server/**/*.ts', 'client/**/*.ts'])
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

gulp.task('lint:all', [
  'eslint:build',
  'tslint:all',
  'lint:sass'
]);
