var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('minifyimage', function () {
	  gulp.src('assets/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('../assets'));
});
gulp.task('cp',function(){
	gulp.src("index.html").pipe(gulp.dest(".."))
});
gulp.task('sass',function(){
  gulp.src('styles/main.scss').pipe(sass()).pipe(autoprefixer()).pipe(minify()).pipe(gulp.dest('../styles'))
});
gulp.task('watch',function(){
	gulp.watch(['*.html'],['cp']);
	gulp.watch(['styles/*.scss'],['sass']);
});
gulp.task('default',['minifyimage','watch'])
