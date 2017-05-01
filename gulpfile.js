var gulp           = require('gulp'),
    // connect = require('gulp-connect'),
    webserver      = require('gulp-webserver'),
    gulpCompass    = require('gulp-compass'),
    gulpLivereload = require('gulp-livereload');  // 載入 gulp-livereload

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            host: '192.168.2.101',
            livereload: true,
            // directoryListing: true,
            // open: true
        }));
});

gulp.task('compass', function () {
    gulp.src('scss/*.scss') // sass 來源路徑
        .pipe(gulpCompass({
            css: 'css',             // compass 輸出位置
            sass: 'scss',           // sass 來源路徑
            image: 'img',           // 圖片來源路徑
            style: 'nested',    // CSS 處理方式，預設 nested（expanded, nested, compact, compressed）
            comments: false,        // 是否要註解，預設(true)
            require: ['susy'],      // 額外套件 susy
        }));
        // .pipe(gulpLivereload());
        // .pipe(gulp.dest('app/assets/temp')); // 輸出位置(非必要)
});

gulp.task('watch',function(){
    // gulpLivereload.listen();
    gulp.watch(['./scss/*.scss'],['compass']);
    // gulp.watch(['./js/*.js', './css/*.css', './html/*.html', './index.html'],['reload']);
});

gulp.task('reload', function() {
    gulp.src(['./index.html'])
        .pipe(gulpLivereload());
});

gulp.task('default',['webserver', 'watch']);
// gulp.task('default',['webserver']);
