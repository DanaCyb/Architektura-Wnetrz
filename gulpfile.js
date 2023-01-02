const {src, dest, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssDest = 'style';
const cssInputFile = 'source/style.scss';

function streamSass(){
  return src(cssInputFile)
  .pipe(
      sass({
          outputStyle: "compressed"
      }).on('error', sass.logError)
  )
  .pipe(dest(cssDest));
}