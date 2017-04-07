var gulp = require('gulp'),
	less = require('gulp-less')
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

// Watch file changes
gulp.task('watch', function(){
	gulp.watch('less/**/*.less', ['styles']);
});

// Default task
gulp.task('default', ['styles', 'watch']);