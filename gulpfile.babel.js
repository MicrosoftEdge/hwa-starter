import browserSync from 'browser-sync';
import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import eslint from 'gulp-eslint';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

const browserSyncInstance = browserSync.create();

gulp.task('serve', ['js', 'sass', 'copy'], () => {
  browserSyncInstance.init({
    server: {
      baseDir: './dist/',
    },
  });

  gulp.watch('app/css/**/*.scss', ['sass']);
  gulp.watch('app/**/*.html', ['copy-watch']);
  gulp.watch('app/**/*.js', ['js-watch']);
});

// Copy all static files to dist/
gulp.task('copy', () => (
  gulp.src(['app/**/*', '!app/**/*.js', '!app/**/*.scss'])
    .pipe(gulp.dest('dist'))
));

gulp.task('copy-watch', ['copy'], () => browserSyncInstance.reload());

// Use babel to compile ES2015 JS files
gulp.task('js', ['lint'], () => (
  gulp.src('app/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'))
));

gulp.task('js-watch', ['js'], () => browserSyncInstance.reload());

// Run linting on all JS files
gulp.task('lint', () => (
  gulp.src(['app/**/*.js', 'gulpfile.babel.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
));

// Compile Sass stylesheets in app/css/
gulp.task('sass', () => (
  gulp.src(['app/css/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSyncInstance.stream())
));

gulp.task('default', ['js', 'sass', 'copy'], () => {

});
