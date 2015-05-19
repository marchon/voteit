var gulp = require('gulp'), // Main package for Gulp
    connect = require('gulp-connect'), // Gulp package to connect to server
    open = require('gulp-open'), // Gulp package to open in a browser
    browserify = require('gulp-browserify'), // Gulp package to browserify and reactify the app
    concat = require('gulp-concat'), // Gulp package to concat the components
    post = process.env.port || 3031;

// Task to browserify the app
gulp.task('browserify', function () {
  gulp.src('./app/src/js/components/main.js', {read: false})
      .pipe(browserify({ transform: 'reactify' }))
      .pipe(gulp.dest('./app/dist/js'));
});

// Task to open app in a browser
gulp.task('open', function () {
  var options = {
    url: 'http://localhost:' + port,
    app: 'chrome'
  };
  gulp.src('./app/index.html')
      .pipe(open('', options));
});

// Task to connect to live-reload server
gulp.task('connect', function () {
  connect.server({
    root: 'app',
    port: port,
    livereload: true
  });
});

// Task to reload changes in JS
gulp.task('reload-js', function () {
  gulp.src('./app/dist/**/*.js')
      .pipe(connect.reload());
});

// Task to reload changes in JS
gulp.task('reload-html', function () {
  gulp.src('./app/*.html')
      .pipe(connect.reload());
});

// Watch task for checking changes
gulp.task('watch', function () {
  gulp.watch('./app/dist/js/*.js', ['reload-js']);
  gulp.watch('./app/*.html', ['reload-html']);
  gulp.watch('./app/src/js/**/*.js', ['browserify']);
});