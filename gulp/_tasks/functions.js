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
  const f = args.ftitle && args.ftitle !== 'トップ' ? `${args.ftitle} | ` : '';
  const l = args.ltitle ? `${args.ltitle} | ` : '';
  const p = args.ptitle ? `${args.ptitle} | ` : '';
  result.title = `${f}${l}${p}${args.data.init.global.sitename}`;
  // キーワード
  result.keywords = args.data.init.global.keywords;
  // ディスクリプション
  result.description = args.data.init.global.description;
  // URL
  result.url = args.data.init.global.url;

  return result;
};


FUNCTIONS.getLink = (href) => {
  let result = '';
  if (href) result = `href="${href}"`;

  return result;
};

FUNCTIONS.n2br = (str) => {
  const newStr = str.slice(0, -1);
  return newStr.replace(/\n/g, '<br>');
};

module.exports = FUNCTIONS;
