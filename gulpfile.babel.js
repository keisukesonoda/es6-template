import conf from './config'
import gulp from 'gulp'


/**
 * server
 */
import browser from 'browser-sync'

gulp.task( 'server', () => {
  browser({
    server: {
      baseDir: `${conf.path.dest.root}`,
    },
    port: 8000,
    open: false,
  })
})


/**
 * reload
 */
gulp.task( 'reload', () => {
  gulp.src( `${conf.dir.context}` )
      .pipe( browser.reload({stream: true}) )
})



/**
 * webpack
 * polymerをどうするか？（要調査）
 */
import webpack       from 'gulp-webpack'
import webpackConfig from './webpack.config.js'

gulp.task( 'webpack', () => {
  gulp.src([
    './app/src/js/*.js',
  ])
      .pipe( webpack(webpackConfig) )
      .pipe( gulp.dest('./app/dist/js/') )
      .pipe( browser.reload({stream: true}) )
})



/**
 * sass
 */
import sass         from 'gulp-sass'
import plumber      from 'gulp-plumber'
import cssmin       from 'gulp-cssmin'
import rename       from 'gulp-rename'
import sourcemaps   from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer'

const cssFiles = [
  'pc',
  'sp',
  // 'editor-style'
];

gulp.task( 'sass', () => {
  let sassFiles = []
  cssFiles.map( (val, i) => {
    sassFiles.push( conf.path.src.sass+'/'+val+'.scss' );
  })

  gulp.src( sassFiles )
      .pipe( sourcemaps.init() )
      .pipe( plumber() )
      .pipe( sass({
        outputStyle: 'expanded',
      }).on( 'error', sass.logError))
      .pipe( autoprefixer({
        browsers: [
          'last 2 versions',
          'ie >= 10',
          'Android >= 4.1',
          'ios_saf >= 7'
        ],
        cascade: false,
      }))
      .pipe( gulp.dest(`${conf.path.src.css}`) )
      .pipe( cssmin() )
      .pipe( sourcemaps.write('./') )
      .pipe( rename({ suffix: '.min' }) )
      .pipe( gulp.dest(`${conf.path.dest.css}`) )
      .pipe( browser.reload({ stream: true }) )
})



/**
 * watch
 */
gulp.task('watch', () => {

  gulp.watch([
    `${conf.path.dest.root}/**/*.html`
  ], ['reload'])

  gulp.watch([
    `${conf.path.src.js}/*.js`], ['webpack'])

  gulp.watch([`${conf.path.src.sass}/**/*.scss`], ['sass'])

})


/**
 * default
 */
gulp.task('default', ['watch', 'server'])

