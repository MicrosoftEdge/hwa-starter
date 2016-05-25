import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import eslint from 'gulp-eslint';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

// Copy all static files to dist/
gulp.task('copy', () => (
  gulp.src(['app/**/*', '!app/**/*.js', '!app/**/*.scss'])
    .pipe(gulp.dest('dist'))
));

// Use babel to compile ES2015 JS files
gulp.task('js', () => (
  gulp.src('app/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'))
));

// Run linting on all JS files
gulp.task('lint', () => (
  gulp.src(['**/*.js', '!node_modules/**', '!dist/**'])
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
));

gulp.task('default', ['lint', 'sass', 'js', 'copy'], () => {

});
