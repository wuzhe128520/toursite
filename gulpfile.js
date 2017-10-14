/**
 * Created by Administrator on 2016/8/21.
 */
var gulp=require("gulp");
var plugins = require('gulp-load-plugins')();
//编译less
gulp.task('compile-less', function () {
    gulp.src('less/*.less')
        .pipe(plugins.less())
        .pipe(gulp.dest('css')) //输出到css目录
        .pipe(plugins.livereload());//刷新css
});
//js代码检查
gulp.task('jshint', function () {
    gulp.src('js/*.js')
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter()); // 输出检查结果
});
/*gulp.task('minify-css', function () {
    gulp.src('css/!*.css') // 要压缩的css文件
        .pipe(plugins.minifycss()) //压缩css
        .pipe(plugins.rename('all.min.js'))
        .pipe(gulp.dest('css'));
});*/
/*//js代码压缩
gulp.task('minify-js', function () {
    gulp.src('js/!*.js') // 要压缩的js文件
        .pipe(plugins.livereload()); //压缩后的路径
});*/
//html代码压缩
gulp.task('reload-html', function () {
    gulp.src('./*.html')
        .pipe(plugins.livereload());
});

gulp.task('watch', function() {
    plugins.livereload.listen(); //要在这里调用listen()方法
    gulp.watch(['less/*.less','./*.html'], ['compile-less','reload-html']);//监听less文件和html文件的变化，发生变化后，执行后面的任务

});
gulp.task('default',["watch"]);


