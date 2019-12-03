var gulp = require('gulp'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano'),
  sourcemaps = require('gulp-sourcemaps'),
  browserSync = require('browser-sync').create()
  notify = require('gulp-notify')
  cachebust = require('gulp-cache-bust')
  plumber = require('gulp-plumber')
  concat = require('gulp-concat')
  babel = require('gulp-babel')

var uiPath = './src/'
var destPath = './dist/'

var paths = {
  styles: {
    // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
    src: uiPath + '_scss/**/*.scss',
    // Compiled files will end up in whichever folder it's found in (partials are not compiled)
    dest: destPath + 'css',
  },
  js: {
    src: uiPath + '_js/**/*.js',
    dest: destPath + 'js',
  },
  templates: {
    src: uiPath + 'templates/case-studies/_entry.twig',
  },
}

function style() {
  return (
    gulp
      .src(paths.styles.src)
      .pipe(sourcemaps.init())
      .pipe(cachebust({type: 'timestamp'}))
      .pipe(
        plumber({
          errorHandler: notify.onError('Error: <%= error.message %>'),
        })
      )
      .pipe(sass().on('error', sass.logError))
      // Use postcss with autoprefixer and compress the compiled file using cssnano
      .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(paths.styles.dest))
      .pipe(browserSync.reload({stream: true}))
  )
}

//Compile JS
function jsCompile(params) {
  return (
    gulp
      //.src(paths.js.src) // all js
      .src([
        //uiPath + '_js/sticky-nav.js',
        //uiPath + '_js/scroll-to.js',
      ])
      .pipe(
        plumber({
          errorHandler: notify.onError('Error: <%= error.message %>'),
        })
      )
      .pipe(concat('main.js'))
      //.pipe(uglify()) // TODO
      .pipe(
        babel({
          presets: ['@babel/env'],
        })
      )
      .pipe(gulp.dest(paths.js.dest))
      .pipe(browserSync.reload({stream: true}))
  )
}

// Add browsersync initialization at the start of the watch task
function watch() {
  browserSync.init({
    proxy: 'localhost:8888',
    stream: true,
  })
  gulp.watch(paths.styles.src, style)
  gulp.watch(paths.js.src, jsCompile)
  gulp.watch(paths.templates.src).on('change', browserSync.reload)
}

// Tasks
exports.watch = watch
exports.style = style

var build = gulp.parallel(style, jsCompile, watch)
gulp.task('default', build)
