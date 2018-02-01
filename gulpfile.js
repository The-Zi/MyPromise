var gulp = require("gulp");
// 压缩
var uglifyjs = require("gulp-uglifyjs");
// 重命名
var rename = require("gulp-rename");

gulp.task("build", function() { 
    return gulp.src("./working/MyPromise.js")
                .pipe(uglifyjs())
                .pipe(rename({
                    suffix: ".mini"
                }))
                .pipe(gulp.dest("./build/"));
});

gulp.task("default", function() {
    gulp.watch("./working/MyPromise.js",["build"]);
});