var gulp = require('gulp'),
    sass = require('gulp-ruby-sass');

gulp.task('default', function () {
    return gulp.src('src/scss/app.scss')
        .pipe(sass({sourcemap: true, sourcemapPath: '../scss'}))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('dist/css'));
});
