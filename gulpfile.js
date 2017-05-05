var gulp           = require('gulp'),
    webserver      = require('gulp-webserver'),
    gulpCompass    = require('gulp-compass'),
    gulpPlumber    = require('gulp-plumber'),
    gulpNotify     = require("gulp-notify");

// var phpConnect     = require('gulp-connect-php');
// // var browserSync    = require('browser-sync').create();
// var browserSync    = require('browser-sync');

// gulp.task('serve', function () {
//     browserSync.init({
//         // server: true,
//         server: {
//             baseDir: '/home/rd00/Git/cms',
//             index: 'index.html',
//         },
//     });
// });

// gulp.task('php-server', function() {
//     phpConnect.server({}, function (){
//         browserSync({
//             proxy: '127.0.0.1:8000'
//         });
//     });

//     gulp.watch('**/*.php').on('change', function () {
//         browserSync.reload();
//     });
// });

// gulp.task('default', ['serve']);
// gulp.task('php', ['php-server']);

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            host: '192.168.189.32',
            livereload: true,
            // directoryListing: true,
            // open: true
        }));
});

gulp.task('compass', function () {
    gulp.src('scss/*.scss')     // sass 來源路徑
        .pipe(gulpPlumber())
        .pipe(gulpCompass({
            css: 'css',         // compass 輸出位置
            sass: 'scss',       // sass 來源路徑
            image: 'img',       // 圖片來源路徑
            style: 'nested',    // CSS 處理方式，預設 nested（expanded, nested, compact, compressed）
            comments: false,    // 是否要註解，預設(true)
            require: ['susy'],  // 額外套件 susy
        }))
        .pipe(gulpNotify('Compass Scss Finish'));
});

gulp.task('watch',function(){
    gulp.watch(['./scss/*.scss'],['compass']);
});

gulp.task('default',['webserver', 'watch']);
