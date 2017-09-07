const CONFIG = require('../config');
const gulp = require('gulp');
const yaml = require('gulp-yaml');

// yamlからjsonにコンパイル
gulp.task('yaml2json', () => {
  gulp.src(`${CONFIG.PATH.src.data}/news.yaml`)
      .pipe(yaml({
        safe: true,
        space: 2,
      }))
      .pipe(gulp.dest(`${CONFIG.PATH.dest.root}/data/`));
});
