import { Theme } from '@shoutem/theme';
import { setCalendarLocale } from './utils';
import getThemeStyle from './theme';

function setDefaultThemeStyle() {
  const theme = getThemeStyle();
  Theme.setDefaultThemeStyle(theme);
}

export { setDefaultThemeStyle, setCalendarLocale };
