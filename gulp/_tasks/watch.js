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
    `${CONFIG.PATH.src.js}/*.js`,
  ], ['webpack']);

  gulp.watch([
    `${CONFIG.PATH.src.sass}/**/*.scss`,
  ], ['sass']);
});
