var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload= require('gulp-livereload'),
    notify = require('gulp-notify'),
    minify = require('gulp-minify'),
    autoprefixer = require('gulp-autoprefixer');

//HTML Task
gulp.task('html' , function(){
    return gulp.src('stage/html/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(notify('HTML TASK FINISHED !'))
        .pipe(livereload())
});

//CSS Task
gulp.task('css' , function(){
    return gulp.src(['stage/css/**/*.css' , 'stage/css/**/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error' , sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(notify('CSS TASK FINISHED !'))
        .pipe(livereload())
});

//JS Task
gulp.task('js' , function(){
    return gulp.src('stage/js/*.js')
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
        .pipe(notify('JS TASK FINISHED !'))
        .pipe(livereload())
});

//Watch Task
gulp.task('watch' , function(){
    require('./server');
    livereload.listen();
    gulp.watch('stage/html/*.html' , gulp.series('html'));
    gulp.watch(['stage/css/**/*.css' , 'stage/css/**/*.scss'] , gulp.series('css'));
    gulp.watch('stage/js/*.js' , gulp.series('js'));
});