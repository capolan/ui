import I18n from 'ex-react-native-i18n';
import { LocaleConfig } from 'react-native-calendars';
import moment from 'moment/min/moment-with-locales';
import _ from 'lodash';
import * as calendarLocales from '../locales/calendar';

const normalizeLocale = (locale) => {
  const fallback = 'en';
  const availableLocales = moment.locales();
  const normalizedLocale = locale.replace(/_/g, '-').toLowerCase();
  if (!_.includes(availableLocales, normalizedLocale)) {
    return fallback;
  }
  return normalizedLocale;
}

const getCurrentLocale = () => {
  const locale = I18n.locale;
  return normalizeLocale(locale);
}

const setCalendarsLocale = () => {
  const locale = getCurrentLocale();
  LocaleConfig.locales['en'] = LocaleConfig.locales['']; // set en as fallback
  LocaleConfig.locales['pt-br'] = calendarLocales.pt;
  LocaleConfig.locales['pt'] = calendarLocales.pt;
  LocaleConfig.defaultLocale = locale;
}

export { getCurrentLocale, setCalendarsLocale };
