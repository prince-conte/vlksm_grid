'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('app/assets/stylesheets/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/assets/stylesheets/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('app/assets/stylesheets/*.scss', ['sass']);
});