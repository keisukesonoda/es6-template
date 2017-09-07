'use strict';

const CONFIG = require('../config');
const FUNC = require('./functions');
const gulp = require('gulp');
const YAML = require('js-yaml');
const fs = require('fs');
const ect = require('gulp-ect-simple');
const browser = require('browser-sync');

/**
 * data updates
 */
let DATA = {};
gulp.task('data-updates', () => {
  DATA = {
    init: YAML.safeLoad(fs.readFileSync(`${CONFIG.PATH.src.data}/init.yaml`, 'utf8')),
    page: YAML.safeLoad(fs.readFileSync(`${CONFIG.PATH.src.data}/pages.yaml`, 'utf8')),
  };
});

/**
 * basic
 */
gulp.task('ect-base', ['data-updates'], () => {
  DATA.page.directories.forEach((pages) => {
    const dir = pages.name ? `${pages.name}/` : '';

    if (pages.files) {
      pages.files.forEach((file) => {
        // 第一階層
        gulp.src(`${CONFIG.PATH.src.cont}/${dir}${file.name}.ect`)
          .pipe(ect({
            options: CONFIG.OPTION.ect,
            data: {
              title: file.title,
              unique: file.unique,
              pageClass: pages.name ? pages.name : 'home',
              path: pages.name ? '../' : './',
              data: DATA,
              fn: FUNC,
            },
          }))
          .pipe(gulp.dest(`${CONFIG.PATH.dest.root}/${dir}`))
          .pipe(browser.reload({ stream: true }));
      }); // endforeach pages.files
    }

    // 第二階層
    if (pages.lower) {
      pages.lower.forEach((lowers) => {
        lowers.files.forEach((lwrFile) => {
          gulp.src(`${CONFIG.PATH.src.cont}/${dir}${lowers.dir}/${lwrFile.name}.ect`)
            .pipe(ect({
              options: CONFIG.OPTION.ect,
              data: {
                title: lwrFile.title,
                unique: lwrFile.unique,
                pageClass: pages.name,
                path: '../../',
                data: DATA,
                fn: FUNC,
              },
            }))
            .pipe(gulp.dest(`${CONFIG.PATH.dest.root}/${dir}${lowers.dir}`))
            .pipe(browser.reload({ stream: true }));
        });
      });
    } // endif pages.lower
  }); // endforeach DATA.page.directories
});
