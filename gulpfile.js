const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');

gulp.task('sass', function () {
  return gulp.src('./assets/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('views', function buildHTML() {
    return gulp.src(['views/about.pug', 'views/index.pug'])
    .pipe(pug({}))
    .pipe(gulp.dest('./'));
});

gulp.task('build', ['sass', 'views']);

gulp.task('sass:watch', function () {
  gulp.watch('./assets/scss/*.scss', ['sass']);
});