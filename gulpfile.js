const {src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssDest = 'style';
const cssInputFile = 'source/style.scss';
const watchedFiles = 'source/**/*.sass';


function streamSass(){
  return src(cssInputFile)
  .pipe(
      sass({
          outputStyle: "compressed"
      }).on('error', sass.logError)
  )
  .pipe(dest(cssDest));
}
function watch (){
  gulp.watch(watchedFiles,streamSass);
}
exports.watch = watch;
exports.streamSass = streamSass;