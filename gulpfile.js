'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var jade = require('gulp-jade');

gulp.task('templates', function() {
    var YOUR_LOCALS = {};

    gulp.src('app/views/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(gulp.dest('app/views/'))
});

gulp.task('sass', function () {
    return gulp.src('app/assets/stylesheets/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/assets/stylesheets/'));
});

gulp.task('watch', function () {
    gulp.watch('app/assets/stylesheets/*.scss', ['sass']);
    gulp.watch('app/views/*.jade', ['templates']);
});