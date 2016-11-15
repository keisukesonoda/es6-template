const config = {}

/**
 * directory names
 */
config.dir = {
  context: __dirname,
  app: 'app',
  src: 'src',
  dest: 'dist',
  js: 'js',
  css: 'css',
  sass: 'sass',
  data: 'data',
}


/**
 * path settings
 */
const dir = config.dir
config.path = {
  src: {
    root: `${dir.context}/${dir.app}/${dir.src}`,
    sass: `${dir.context}/${dir.app}/${dir.src}/${dir.sass}`,
    css:  `${dir.context}/${dir.app}/${dir.src}/${dir.css}`,
    js:   `${dir.context}/${dir.app}/${dir.src}/${dir.js}`,
  },
  dest: {
    root: `${dir.context}/${dir.app}/${dir.dest}`,
    css:  `${dir.context}/${dir.app}/${dir.dest}/${dir.css}`,
    js:   `${dir.context}/${dir.app}/${dir.dest}/${dir.js}`,
  }

}



export default config;