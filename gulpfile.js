var gulp         = require('gulp'),
	sass         = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	react        = require('gulp-react'),
	livereload   = require('gulp-livereload');

// Sass task : $ gulp sass	 to run
gulp.task('sass', function() {
	gulp.src('sass/style.sass')
	.pipe(sass({
		style: 'expanded',  // default: 'nested'. Other options: 'compact', 'compressed', 'expanded'
		debugInfo: false //use Firesass Firebug plugin if true
	}))
	.on('error', function (err) { console.log(err.message); })
	.pipe(gulp.dest('public/css'))
	.pipe(livereload());
});

// Autoprefixer task : $ gulp prefix	to run
gulp.task('prefix', function() {
	gulp.src('public/css/main.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'], //see documentation to expand compability
			cascade: true //for nice and beautiful cascades
		}))
		.pipe(gulp.dest('public/css/main.css'))
		.pipe(livereload());
});

// React procompiler task : $ gulp react 	to run
gulp.task('react', function() {
	gulp.src('pathtoreplace/filetoreplace.jsx')
		.pipe(react())
		.pipe(gulp.dest('destinationpath'))
		.pipe(livereload());
});

// Files watcher
gulp.task('watch', function() {
	livereload.listen(35729, function(err){
        if(err) return console.log(err);
    });
	gulp.watch('public/**/*.php', function() { console.log('change in php'); livereload(); });
	gulp.watch('sass/**/*.sass', ['sass']);
	gulp.watch('public/css/*.css', ['prefix']);
});

// Default task : $ gulp 	to run
gulp.task('default', [
					'sass',
					//no need to call 'prefix'. It will trigger after sass task has finished
					//add the 'react' task when you are ready
					
					'watch'
					]);