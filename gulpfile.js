var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

var cssDest = 'style';
var cssInputFile = 'source/style.scss';

gulp.task('buildcss', function(){
  return gulp.src(cssInputFile)
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .pipe(gulp.dest(cssDest));
});
