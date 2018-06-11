import { getCurrentLocale } from '../utils';

const locale = getCurrentLocale();

export default () => {
  switch (locale) {
    case 'en':
      return require('./languages/en.json');
    case 'pt':
      return require('./languages/en.json');
    default:
      return require('./languages/en.json');
  }
}
