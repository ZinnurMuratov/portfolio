'user strict';
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const uglify = require('gulp-uglify');
const typescript = require('gulp-typescript');

const config = require('./config');

gulp.task('typescript:server', () => {
  return gulp.src('server/**/*.ts')
    .pipe(typescript({
      noImplicitAny: true,
    }))
    .pipe(gulpIf(config.prod, uglify()))
    .pipe(gulp.dest(`${config.buildPath}/server`));
});