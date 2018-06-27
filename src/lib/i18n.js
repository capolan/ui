import isExpo from './isExpo';

let I18n;
if (isExpo) {
  I18n = require('ex-react-native-i18n').default;
} else {
  I18n = require('react-native-i18n');
}

export default I18n;
