/**
 * Created by hanshaojie on 2017/1/19.
 */
var gulp = require('gulp'),
    htmlReplace = require("gulp-html-replace"),
    replace = require('gulp-url-replace'),
    borwserSync = require('browser-sync').create(),
    reload = borwserSync.reload,
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache');

//编译sass并压缩
/*gulp.task('sass', function() {
    return gulp.src('scss/!**!/!*.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(notify({ message: 'sass task complete' }));
});*/
//压缩css
gulp.task('css', function() {
    return gulp.src('css/**/*.css')
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(notify({ message: 'css task complete' }));
});
//压缩图片
gulp.task("minImg",function () {
    return gulp.src("img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/img'))
        .pipe(notify({message:'img task complete'}));
});
//JSHint 拼接及缩小化JavaScript
gulp.task("scripts",function () {
    return gulp.src("js/**/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        // .pipe(concat('common.js'))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(rename({suffix:".min"}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(notify({message:'Scripts task complete'}))
});

//清理
gulp.task('clean',function () {
  return gulp.src(['dist/assets/css','dist/assets/js','dist/assets/img'],{read:false}).pipe(clean());
});


//url replace
gulp.task("url-replace",function () {
    gulp.src('./*.html').pipe(replace({
        'js/**/*.js':'js/**/*.min.js',
        'css/**/*.css':'css/**/*.min.css'
    })).pipe(gulp.dest('dist/assets/'));
});

//默认执行注册的任务
/*gulp.task('default',['clean','styles','minImg','scripts','watch']);*/

//自动编译和监听
gulp.task('browser-sync',function () {
    borwserSync.init({
        server:{
            baseDir:'./'
        }
    });
    // gulp.watch("scss/**/*.scss",['sass']);
    gulp.watch("css/**/*.css",['css']);
    gulp.watch("js/**/*.js",['scripts']);
    gulp.watch("img/**/*",['minImg']);
    gulp.watch('dist/**').on('change',reload);
});

//预设任务
gulp.task('default',['clean'],function () {
    gulp.start('css','minImg','scripts','url-replace','browser-sync');
});











