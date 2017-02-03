var gulp     = require("gulp"),
plumber      = require("gulp-plumber"),
browserSync  = require("browser-sync"),
compass 	 = require('gulp-compass'),
uglify       = require('gulp-uglify'),
cssmin       = require('gulp-cssmin'),
autoprefixer = require('gulp-autoprefixer');

gulp.task("server", function() {
	browserSync({
		port: 9000,
		server: {
			baseDir: "app"
		}
	});

	gulp.watch([
		"app/*.html",
		"app/pages/*.html",
		"app/_scss/**/*.scss",
		"app/js/**/*.js"
		], ['watch']);
});

gulp.task('watch', ['compass'], function (done){
	browserSync.reload();
	done();
});

gulp.task('compass', function() {
	return gulp.src('./app/_scss/*.scss')
	.pipe(plumber())
	.pipe(compass({
		config_file: './config.rb',
		css: './app/css',
		sass: './app/_scss/'
	}))
});

gulp.task("default", ["server"]);

/****************
** production ***
****************/

gulp.task('minify-main-js', function () {
	gulp.src(['app/js/*.js', '!app/js/*.min.js'])
	.pipe(uglify())
	.pipe(gulp.dest('app/project/js')); 
});

gulp.task('copy-js-min', function () {
	gulp.src('!app/js/*.min.js')
	.pipe(gulp.dest('app/project/js')); 
});

gulp.task('minify-css', function () {
	gulp.src(['app/css/**/*.css'])
	.pipe(autoprefixer({
		browsers: ['last 5 versions'],
		cascade: false
	}))
	.pipe(cssmin())
	.pipe(gulp.dest('app/project/css'));
});

gulp.task('fonts', function () {
	gulp.src('app/fonts/**/*.*')
	.pipe(gulp.dest('app/project/fonts'));
});

gulp.task('img', function () {
	gulp.src('app/images/**/*.*')
	.pipe(gulp.dest('app/project/images'));
});

gulp.task('index', function () {
	gulp.src('app/index.html')
	.pipe(gulp.dest('app/project'));
	gulp.src('app/pages/*.*')
	.pipe(gulp.dest('app/project/pages'));
});

gulp.task('build', ['minify-main-js', 'copy-js-min', 'minify-css', 'fonts', 'img', 'index']);