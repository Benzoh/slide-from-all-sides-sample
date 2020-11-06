var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
    console.log('Hello, gulp.');
});

gulp.task('sass', function() {
  return gulp.src('./sass-src/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./sass-dest'));
});

gulp.task('watch', function() {
  gulp.watch(['./sass-src/*.scss'], gulp.parallel('sass'));
});
