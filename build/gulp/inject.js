'use strict';
const gulp = require('gulp');
const inject = require('gulp-inject');
const plumber = require('gulp-plumber');

gulp.task('inject:component:scss', () => {
  let target = gulp.src('./client/main.scss');
  let sources = gulp.src(['./client/components/**/*.scss'], { read: false });

  return target
    .pipe(plumber())
    .pipe(inject(sources, {
      starttag: '// startinject',
      endtag: '// endinject',
      relative: true,
      transform: (filepath) => {
        return '@import \'' + filepath + '\';';
      }
    }))
    .pipe(gulp.dest('./client/'));
});
