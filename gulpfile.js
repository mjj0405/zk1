var gulp = require('gulp');
var server = require('gulp-webserver');
var sass = require('gulp-sass');
var minCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var minHtml = require('gulp-htmlmin');
var concat = require('gulp-concat');
var fs = require('fs');
var url = require('url');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');
gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 8080,
            open: true,
            livereload: true,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/favicon.ico') {
                    return false;
                }
                pathname = pathname === '/' ? '/index.html' : pathname;
                console.log(__dirname);
                console.log(pathname);
                res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
            }
        }))
})

// 编译sass
gulp.task('sass', function() {
    gulp.src('./src/**/*.scss')
        .pipe(sass())
        .pipe(concat('all.css'))
        .pipe(minCss())
        .pipe(gulp.dest('./src/css'))
})


// gulp.task('minCss', function() {
//     gulp.src('./src/**/*.scss')
//         .pipe(minCss())
//         .pipe(gulp.dest('build/css'))
// })
// gulp.task('uglify', function() {
//     gulp.src('./src/**/*.js')
//         .pipe(uglify({
//             browser: [' versions', 'Android>=4.0']
//         }))
//         .pipe(gulp.dest('build/js'))
// })
// gulp.task('minHtml', function() {
//     gulp.src('./src/**/*.scss')
//         .pipe(minHtml())
//         .pipe(gulp.dest('build/html'))
// })

// 1.	按照原图进行页面的高度还原。
// 2.	实现移动端的适配问题；
// 3.	页面最大宽度限定为640px；
// 4.	页面的最小宽度限定为320px；
// 5.	使用gulp进行项目的构建；
// 6.	使用gulp进行接口的开发；
// 7.	使用gulp启动服务进行页面的渲染；
// 8.	在本地创建版本库；
// 9.	本地git具有git的提交记录；
// 10.	将本地git版本库与远程版本库进行关联；
// 11.	将本地git版本提交到远程，与远程同步；
// 12.	具有清晰规范的项目结构
// 13.	项目目录具有较规范的命名
// 14.	对于公共代码的封装
// 15.	js代码的书写，具有清晰的思路与规范；
// 16.	具有规范的注释
// 17.	使用gulp实现html文件的压缩；
// 18.	使用gulp实现css文件的压缩；
// 19.	使用gulp实现js文件的压缩；
// 20.	代码进行分文件管理