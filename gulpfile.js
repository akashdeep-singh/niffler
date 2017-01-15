const gulp = require('gulp');
const typescript = require('gulp-tsc');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserify = require('gulp-browserify');
const jsdoc3 = require('gulp-jsdoc3');
const del = require('del');

gulp.task('compile', function () {
  return gulp.src('src/niffler.ts')
    .pipe(typescript())
    .pipe(gulp.dest('bin'));
});

gulp.task('uglify', ['compile'], function () {
  return gulp.src('bin/niffler.js')
    .pipe(uglify())
    .pipe(concat('niffler.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('browserify', ['compile', 'uglify'], function () {
  gulp.src('dist/niffler.min.js')
    .pipe(browserify({
      insertGlobals: true
    }))
    .pipe(concat('niffler.min.browser.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['compile', 'uglify', 'browserify']);

gulp.task('clean', function () {
  return del(['bin', 'dist', 'docs']);
});

gulp.task('document', ['build'], function (cb) {
  gulp.src("./bin/niffler.js")
    .pipe(jsdoc3({
      "opts": {
        "destination": "./docs/"
      }
    }, cb));
});

gulp.task('rebuild', ['clean', 'build', 'document']);

gulp.task('default', ['build']);