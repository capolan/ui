import I18n from 'ex-react-native-i18n';

// Enable fallbacks if you want `pt-BR` and `pt-PT` to fallback to `pt`
I18n.fallbacks = true;

I18n.translations = {
  pt: require('./languages/pt.json'),
  en: require('./languages/en.json'),
};

const languageCode = I18n.locale && I18n.locale.substr(0, 2);

switch (languageCode) {
  case 'en':
    I18n.translations.en = require('./languages/en.json');
    break;
  default:
    I18n.translations.pt = require('./languages/pt.json');
    break;
}

export default I18n;
