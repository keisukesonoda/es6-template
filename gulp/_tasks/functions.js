'use strict';

// const CONF = require('../config');

const FUNCTIONS = {};

/**
 * @params
 * @return array(title, class, place, path)
 */
FUNCTIONS.getMeta = (args) => {
  const result = {};
  // タイトル
  const pageTitle = args.isSingle || args.isArchive ? `${args.title} | ` : '';
  let groupTitle = '';
  if (args.path !== './' && args.isSingle || args.path !== './' && args.isArchive) {
    groupTitle = `${args.pageTitle} | `;
  } else if (args.path !== './' && !args.isSingle || args.path !== './' && !args.isArchive) {
    groupTitle = `${args.title} | `;
  }
  result.title = `${pageTitle}${groupTitle}${args.data.init.global.sitename}`;
  // キーワード
  result.keywords = args.data.init.global.keywords;
  // ディスクリプション
  result.description = args.data.init.global.description;
  // URL
  result.url = args.data.init.global.url;

  return result;
};


FUNCTIONS.gethref = (href) => {
  let result = '';
  if (href) result = `href="${href}"`;

  return result;
};

FUNCTIONS.n2br = (str) => {
  const newStr = str.slice(0, -1);
  return newStr.replace(/\n/g, '<br>');
};

module.exports = FUNCTIONS;
