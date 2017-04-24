'use strict';

const gulp = require('gulp'), 
    sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./SASS/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./SASS/*.scss', ['sass']);
});