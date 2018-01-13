'use strict';
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const gulpIf = require('gulp-if');
const ejsMin = require('gulp-ejsmin');
const imagemin = require('gulp-imagemin');
const inject = require('gulp-inject');

const config = require('./config');

gulp.task('copy:ejs', () => {
  let jsSources = gulp.src([`${config.buildPath}/client/scripts/*.bundle.js`]);
  let cssSources = gulp.src([`${config.buildPath}/client/styles/*.css`]);

  let applicationSrc = gulp.src('server/views/**/*.ejs')
    .pipe(plumber())
    .pipe(gulpIf(config.prod, inject(jsSources, {
      starttag: '<%# startinject:js %>',
      endtag: '<%# endinject:js %>',
      transform: (filePath) => {
        return `<script src="${filePath.replace('/.dist/client', '')}" async></script>`;
      }
    })))
    .pipe(gulpIf(config.prod, inject(cssSources, {
      starttag: '<%# startinject:css %>',
      endtag: '<%# endinject:css %>',
      transform: (filePath) => {
        return `<link rel="stylesheet" href="${filePath.replace('/.dist/client', '')}">`;
      }
    })))
    .pipe(gulpIf(config.prod, ejsMin({
      removeComment: true
    })));

  return applicationSrc
    .pipe(gulp.dest(`${config.buildPath}/server/views/`));
});

gulp.task('copy:images', () => {
  return gulp.src('client/assets/images/**/*.{jpg,png,gif}')
    .pipe(plumber())
    .pipe(gulpIf(config.prod, imagemin()))
    .pipe(gulp.dest(`${config.buildPath}/client/images/`));
});

gulp.task('copy:fonts', () => {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest(`${config.buildPath}/client/fonts`));
});

gulp.task('copy:all', [
  'copy:ejs',
  'copy:images',
  'copy:fonts',
]);
