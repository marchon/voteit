var gulp = require('gulp'), // Main package for Gulp
    connect = require('gulp-connect'), // Gulp package to connect to server
    open = require('gulp-open'), // Gulp package to open in a browser
    browserify = require('gulp-browserify'), // Gulp package to browserify and reactify the app
    concat = require('gulp-concat'), // Gulp package to concat the components
    post = process.env.port || 3031;

