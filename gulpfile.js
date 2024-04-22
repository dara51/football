const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const rename =require('gulp-rename');
const cleanCss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const webpack = require('webpack-stream');
gulp.task('webpack', function(){
    return gulp.src('./src/js/index.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest("./dist/js"));
});


// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/sass/*.+(scss|sass)")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/*.+(scss|sass|css)",gulp.parallel("styles"));
    gulp.watch("src/*.html").on("change", gulp.parallel('html'));
    gulp.watch("src/sass/blocks/*.+(scss|sass|css)",gulp.parallel("styles"));
    gulp.watch("src/sass/base/*.+(scss|sass|css)",gulp.parallel("styles"));
    gulp.watch("src/sass/items/*.+(scss|sass|css)",gulp.parallel("styles"));
});
gulp.task('html' , function() {
    return gulp.src("src/*.html")
    .pipe(gulp.dest("./dist/"))
});


gulp.task('fonts' , function() {
    return gulp.src("src/fonts/**/*")
    .pipe(gulp.dest("./dist/fonts"));
});
gulp.task('vectors' , function() {
    return gulp.src("src/vectors/**/*")
    .pipe(gulp.dest("./dist/vectors"));
});
gulp.task('images' , function() {
    return gulp.src("src/img/**/*")
    .pipe(imagemin([imagemin.mozjpeg({quality: 20, progressive: true}),
        imagemin.optipng({optimizationLevel: 3})]))
    .pipe(gulp.dest("./dist/img"));
});
gulp.task ('default', gulp.parallel('watch','server','styles','fonts','images','vectors','html','webpack'));