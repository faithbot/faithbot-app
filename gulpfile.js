var gulp = require('gulp'),
	less = require('gulp-less'),
	uglify = require('gulp-uglify'),
	plumber = require('gulp-plumber')
;

// Compile Less
gulp.task('styles', function() {
	gulp.src('less/**/*.less')
	.pipe(less({
		filename: 'styles.less',
		compress: true
	}))
	.pipe(gulp.dest('faithbot/_css/'));
});

// Uglify/minify scripts
gulp.task('scripts', function(){
	gulp.src('js/**/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('faithbot/_js'));
});


// Watch file changes
gulp.task('watch', function() {
	gulp.watch('js/**/*.js', ['scripts']);
	gulp.watch('less/**/*.less', ['styles']);
});

// Default task
gulp.task('default', ['scripts', 'styles', 'watch']);