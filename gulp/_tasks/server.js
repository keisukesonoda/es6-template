const CONFIG = require('../config');
const gulp = require('gulp');
const browser = require('browser-sync');

/**
 * server
 */
gulp.task('server', () => {
  browser({
    server: {
      baseDir: `${CONFIG.PATH.dest.root}`,
    },
    port: 8000,
    open: false,
  });
});


/**
 * reload
 */
gulp.task('reload', () => {
  gulp.src(`${CONFIG.DIR.context}`)
      .pipe(browser.reload({
        stream: true,
      }));
});
