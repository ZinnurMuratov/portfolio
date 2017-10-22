'use strict';
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const ejsMin = require('gulp-ejsmin');
const imagemin = require('gulp-imagemin');
const inject = require('gulp-inject');

const config = require('./config');

gulp.task('copy:ejs', () => {
  let sources = gulp.src([`${config.buildPath}/client/scripts/*.bundle.js`]);

  return gulp.src('server/views/**/*.ejs')
    .pipe(gulpIf(config.prod, inject(sources, {
      starttag: '<%# startinject:js %>',
      endtag: '<%# endinject:js %>',
      transform: (filePath) => {
        return `<script src="${filePath.replace('/.dist/client', '')}"></script>`;
      }
    })))
    .pipe(gulpIf(config.prod, ejsMin({
      removeComment: true
    })))
    .pipe(gulp.dest(`${config.buildPath}/server/views/`));
});

gulp.task('copy:images', () => {
  return gulp.src('client/assets/images/**/*.{jpg,png,gif}')
    .pipe(imagemin())
    .pipe(gulp.dest(`${config.buildPath}/client/assets/images`));
});

gulp.task('copy:all', [
  'copy:ejs',
  'copy:images'
]);
