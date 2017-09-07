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
  dest: 'build',
  js: 'js',
  css: 'css',
  sass: 'sass',
  data: 'data',
  img: 'images',
  inq: 'includes',
  temp: 'templates',
  cont: 'content',
};

/**
 * path settings
 */
const dir = CONFIG.DIR;
const SRC = `${dir.context}/${dir.app}/${dir.src}`;
const DEST = `${dir.context}/${dir.app}/${dir.dest}`;
CONFIG.PATH = {
  src: {
    root: `${SRC}`,
    img: `${SRC}/${dir.img}`,
    sass: `${SRC}/${dir.sass}`,
    css: `${SRC}/${dir.css}`,
    js: `${SRC}/${dir.js}`,
    data: `${SRC}/${dir.data}`,
    temp: `${SRC}/${dir.temp}`,
    cont: `${SRC}/${dir.temp}/${dir.cont}`,
  },
  dest: {
    root: `${DEST}`,
    img: `${DEST}/${dir.img}`,
    css: `${DEST}/${dir.css}`,
    js: `${DEST}/${dir.js}`,
  },
};

CONFIG.OPTION = {
  ect: {
    root: `${CONFIG.PATH.src.temp}`,
    ext: '.ect',
  },
};

module.exports = CONFIG;

/**
 * start gulp
 */
gulp.task('default', ['server', 'watch']);
