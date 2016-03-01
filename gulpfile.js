var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
gulp.task('sass',function(){
  gulp.src('src/main.scss').pipe(sass()).pipe(autoprefixer()).pipe(gulp.dest('dist/'))
});
gulp.task('default',['sass'])
