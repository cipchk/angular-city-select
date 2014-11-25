var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    minifycss = require('gulp-minify-css'),
    livereload = require('gulp-livereload'),
    tinylr = require('tiny-lr'),
    server = tinylr();

var lvr_port = 11852;

var source = {
	scripts: 'src/angular-city-select.js',
	less: 'src/angular-city-select.less',
	demo: 'demo/*.html'
};

var build = {
	dir: 'dist'
};

gulp.task('scripts', function () {
    return gulp.src(source.scripts)
        .pipe(uglify())
        .on("error", handleError)
        .pipe(gulp.dest(build.dir))
        .pipe(livereload(server));
});

gulp.task('styles', function () {
    return gulp.src(source.less)
        .pipe(less({
            paths: [source.less]
        }))
        .on("error", handleError)
        .pipe(minifycss())
        .pipe(gulp.dest(build.dir))
        .pipe(livereload(server));
});

gulp.task('demo', function () {
    return gulp.src(source.demo)
        .on("error", handleError)
        .pipe(gulp.dest(build.dir))
        .pipe(livereload(server));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
    try {
        server.listen(
          lvr_port,
          function (err) {

              if (err) { return console.log('1' + err); }

              gulp.watch(source.scripts, ['scripts']);
              gulp.watch(source.less, ['styles']);
              gulp.watch(source.demo, ['demo']);

          });
    }
    catch (e) {
        console.log(e);
    }

});

gulp.task('default', [
	'scripts',
	'styles',
	'demo',
	'watch'
]);



// Error handler
function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}