// config globals
var src = './src/';
var dist = './public/assets/';
var proxyUrl = 'local.app.com';
var localPort = 3005;


// define package
var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	sass = require('gulp-sass'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload;

// sass mappgins files
gulp.task('styles:dev', function(){
  var processors = [
    autoprefixer({browsers: ['> 3%', 'last 2 versions', 'ie 9', 'ios 6', 'android 4']})
  ];

  gulp.src(src + 'scss/**/*.scss')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(postcss(processors))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(dist + 'css/'))
  .pipe(browserSync.stream());
});


// serve
gulp.task('serve', function(){
  browserSync.init({
    proxy: proxyUrl,
    port: localPort,
    reloadDebounce: 500
  });
  gulp.watch(src + 'scss/**/*.scss', ['styles:dev']);
  // gulp.watch(src + 'js/**/*.js', ['scripts:temp']);
  // gulp.watch(src + 'temp/**/*.js', ['scripts:dev']).on('change', reload);
  // gulp.watch('./**/*.php').on('change', reload);
});


// build all
gulp.task('build', ['styles:dev']);

gulp.task('default', ['build', 'serve']);
