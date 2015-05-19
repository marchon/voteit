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