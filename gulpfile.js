var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
var sass=require('gulp-sass');

// Task
gulp.task('default', ['sass'],function() {
    gulp.watch('./public/styles/*.scss',['sass']);
	// listen for changes
	livereload.listen();
	// configure nodemon
	nodemon({
		// the script to run the app
		script: 'app.js',
		ext: 'scss js'
	}).on('restart', function(){
		// when the app has restarted, run livereload.
		gulp.src('app.js')
			.pipe(livereload())
			.pipe(notify('Reloading page, please wait...'));
           
	});
});

gulp.task('sass',function () {
return gulp.src('./public/styles/*.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(gulp.dest('./public/styles'));   
});



