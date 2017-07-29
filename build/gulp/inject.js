'use strict';
const gulp = require('gulp');
const inject = require('gulp-inject');

gulp.task('dev:inject:component:scss', () => {
  let target = gulp.src('./client/main.scss');
  let sources = gulp.src(['./client/components/**/*.scss'], { read: false });

  return target.pipe(inject(sources,
    {
      starttag: '// startinject',
      endtag: '// endinject',
      relative: true,
      transform: function (filepath) {
        return '@import \'' + filepath + '\';';
      }
    }))
    .pipe(gulp.dest('./client/'));
});

gulp.task('dev:inject', [
  'dev:inject:component:scss'
]);
