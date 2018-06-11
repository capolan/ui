import { getCurrentLocale } from '../utils';

const locale = getCurrentLocale();

export default (key) => {
  let translations;
  switch (locale) {
    case 'en':
      translations = require('./languages/en.json');
      break;
    case 'pt':
      translations = require('./languages/pt.json');
      break;
    default:
      translations = require('./languages/en.json');
      break;
  }

  return translations[key];
}
