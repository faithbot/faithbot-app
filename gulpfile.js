var gulp = require('gulp'),
	less = require('gulp-less'),
	uglify = require('gulp-uglify'),
	plumber = require('gulp-plumber'),
	concat = require('gulp-concat')
;


// Uglify/minify scripts
gulp.task('scripts', function(){
	gulp.src('js/**/*.js')
	.pipe(plumber())
	.pipe(concat('scripts.js'))
	.pipe(uglify())
	.pipe(gulp.dest('faithbot/_js/'));
});

// Compile Less
gulp.task('styles', function() {
	gulp.src('less/**/*.less')
	.pipe(plumber())
	.pipe(concat('styles.css'))
	.pipe(less({
		filename: 'styles.less',
		compress: true
	}))
	.pipe(gulp.dest('faithbot/_css/'));
});


// Watch file changes
gulp.task('watch', function() {
	gulp.watch('js/**/*.js', ['scripts']);
	gulp.watch('less/**/*.less', ['styles']);
});

// Default task
gulp.task('default', ['scripts', 'styles', 'watch']);