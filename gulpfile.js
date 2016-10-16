var gulp = require('gulp');
var minifyCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var pump = require('pump');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
    gulp.src('styles/style.css')
    .pipe(minifyCSS(''))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('styles'));
});
gulp.task('watch', function() {
    gulp.watch('styles/style.css', ['default'])
});
gulp.task('compress', function (cb) {
  pump([
        gulp.src('js/*.js'),
        uglify(),
        rename('script.min.js'),
        gulp.dest('js')
    ],
    cb
  );
  
});
