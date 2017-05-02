var gulp           = require('gulp'),
    webserver      = require('gulp-webserver'),
    gulpCompass    = require('gulp-compass');

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
        .pipe(gulpCompass({
            css: 'css',         // compass 輸出位置
            sass: 'scss',       // sass 來源路徑
            image: 'img',       // 圖片來源路徑
            style: 'nested',    // CSS 處理方式，預設 nested（expanded, nested, compact, compressed）
            comments: false,    // 是否要註解，預設(true)
            require: ['susy'],  // 額外套件 susy
        }));
});

gulp.task('watch',function(){
    gulp.watch(['./scss/*.scss'],['compass']);
});

gulp.task('default',['webserver', 'watch']);
