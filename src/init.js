import { Theme } from '@shoutem/theme';
import { setCalendarsLocale } from './utils';
import getThemeStyle from './theme';

function setDefaultThemeStyle() {
  const theme = getThemeStyle();
  Theme.setDefaultThemeStyle(theme);
}

export { setDefaultThemeStyle, setCalendarsLocale };
