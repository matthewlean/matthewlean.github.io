var child = require('child_process');

var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');


var siteRoot = '_site';
var cssFiles = 'css/**/*.?(s)css';

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(plumber(function (error) {
            gutil.log(error.message);
            this.emit('end');
        }))
        .pipe(sass())
        .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest("assets"))
        .pipe(browserSync.stream());
});

// Jekyll task
gulp.task('jekyll', () => {
  var jekyll = child.spawn('jekyll.bat', ['build',
  // var jekyll = child.spawn('jekyll.bat', ['build',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  var jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

// Reloading browser
gulp.task('serve', () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });

  gulp.watch(cssFiles, ['sass']);
});

//use default task
gulp.task('default', ['sass', 'jekyll', 'serve']);
