/**
 * Gulp
 */
var gulp        = require('gulp'),
    less        = require('gulp-less'),
    sass        = require('gulp-sass'),
    path        = require('path'),
    minifyCSS   = require('gulp-clean-css'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),  
    imagemin    = require('gulp-imagemin'),
    cache       = require('gulp-cache'),
    browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
   browserSync.init({
      server: {
         baseDir: './'
      },
   })
});

gulp.task('watch', function() {
    gulp.watch('./assets/less/*.less', ['less']);
    gulp.watch('./assets/js/*.js', ['scripts']);
    gulp.watch('./index.html', ['index']);
});

gulp.task('default', ['browserSync', 'watch', 'build']);

gulp.task('less', function() {
    return gulp.src(['./assets/less/*.less'])
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({
             stream: true
        })); 
});

gulp.task('scripts', function() {
    return gulp.src([
          './bower_components/jquery/dist/jquery.min.js',
          './bower_components/foundation/js/foundation.min.js',
          './bower_components/foundation/js/foundation.abide.js',
          './assets/js/*.js'
        ])
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'))
        .pipe(browserSync.reload({
             stream: true
        }));
});

gulp.task('index', function() {
    return gulp.src('./index.html')
        .pipe(browserSync.reload({
             stream: true
        }));
});

gulp.task('scriptsBuild', function() {
  return gulp.src([
          './bower_components/jquery/dist/jquery.min.js',
          './bower_components/foundation/js/foundation.min.js',
          './bower_components/foundation/js/foundation.abide.js',
          './assets/js/*.js'
        ])
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));       
});

gulp.task('lessBuild', function() {
  return gulp.src(['./assets/less/*.less','./bower_components/fontawesome/css/font-awesome.css'])
         .pipe(less({
           paths: [ path.join(__dirname, 'less', 'includes') ]
         }))
         .pipe(minifyCSS())
         .pipe(gulp.dest('./css'));
});

gulp.task('imagesBuild', function() {
    return gulp.src('./assets/img/*')
         .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
         .pipe(gulp.dest('img'));
});

gulp.task('fontsBuild', function() {
    return gulp.src('./bower_components/fontawesome/fonts/*')
            .pipe(gulp.dest('fonts'));
});


gulp.task('build', ['fontsBuild', 'lessBuild', 'scriptsBuild', 'imagesBuild']);