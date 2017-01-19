const gulp = require('gulp');
const GLOB = require('../gulpfile');

/**
 * directory names
 */
const CONFIG = {};
CONFIG.DIR = {
  // context: __dirname,
  context: GLOB.context,
  app: 'app',
  src: 'src',
  dest: 'dist',
  js: 'js',
  css: 'css',
  sass: 'sass',
  data: 'data',
};

/**
 * path settings
 */
const dir = CONFIG.DIR;
CONFIG.PATH = {
  src: {
    root: `${dir.context}/${dir.app}/${dir.src}`,
    sass: `${dir.context}/${dir.app}/${dir.src}/${dir.sass}`,
    css: `${dir.context}/${dir.app}/${dir.src}/${dir.css}`,
    js: `${dir.context}/${dir.app}/${dir.src}/${dir.js}`,
    data: `${dir.context}/${dir.app}/${dir.src}/${dir.data}`,
  },
  dest: {
    root: `${dir.context}/${dir.app}/${dir.dest}`,
    css: `${dir.context}/${dir.app}/${dir.dest}/${dir.css}`,
    js: `${dir.context}/${dir.app}/${dir.dest}/${dir.js}`,
  },
};

module.exports = CONFIG;


/**
 * start gulp
 */
gulp.task('default', ['server', 'watch']);
