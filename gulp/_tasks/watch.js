const CONFIG = require('../config');
const gulp = require('gulp');

/**
 * watch
 */
gulp.task('watch', () => {
  gulp.watch([
    `${CONFIG.PATH.dest.root}/**/*.html`,
  ], ['reload']);

  gulp.watch([
    `${CONFIG.PATH.src.temp}/**/*.ect`,
    `${CONFIG.PATH.src.data}/**`,
  ], ['ect-base']);

  gulp.watch([
    `${CONFIG.PATH.src.js}/**`,
  ], ['webpack']);

  gulp.watch([
    `${CONFIG.PATH.src.sass}/**/*.scss`,
  ], ['sass']);
});
