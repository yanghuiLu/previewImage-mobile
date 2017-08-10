var gulp = require('gulp')
// 获取 uglify 模块（用于压缩 JS）
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
// 混淆js
// var obfuscate = require('gulp-obfuscate');

//- 对文件名加MD5后缀
//var rev = require('gulp-rev');
//- 路径替换                                  
//var revCollector = require('gulp-rev-collector');

// 压缩 js 文件
// 在命令行使用 gulp script 启动此任务
gulp.task('script', function() {
    gulp.src(['src/*.js'])
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'))
});

gulp.task('default', ['script']);
