import I18n from 'ex-react-native-i18n';
import moment from 'moment/min/moment-with-locales';
import { LocaleConfig } from 'react-native-calendars';
import _ from 'lodash';
import * as calendarLocales from '../i18n/calendar';

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

const getTranslations = () => {
  const locale = getCurrentLocale();
  moment.locale(locale);
  return {
    months: moment.months(),
    monthsShort: moment.monthsShort().map(value => _.capitalize(value)),
    weekdays: moment.weekdays(),
    weekdaysShort: moment.weekdaysShort().map(value => _.capitalize(value)),
  }
}

const setCalendarLocale = () => {
  const locale = getCurrentLocale();
  LocaleConfig.locales['en'] = LocaleConfig.locales['']; // set en as fallback
  LocaleConfig.locales['pt-br'] = calendarLocales.pt;
  LocaleConfig.locales['pt'] = calendarLocales.pt;
  LocaleConfig.defaultLocale = locale;
}

export { getCurrentLocale, getTranslations, setCalendarLocale };
