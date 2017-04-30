'user strict';
const gulp = require('gulp');
const typescript = require('gulp-typescript');

gulp.task('dev:typescript:server', () => {
  return gulp.src('server/**/*.ts')
    .pipe(typescript({
      noImplicitAny: true,
    }))
    .pipe(gulp.dest('.dev/server'));
});