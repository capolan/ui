import { DangerZone } from 'expo';
import { LocaleConfig } from 'react-native-calendars';
import moment from 'moment/min/moment-with-locales';
import _ from 'lodash';
import * as calendarLocales from '../locales/calendar';

const { Localization } = DangerZone;

const normalizeLocale = (locale) => {
  const fallback = 'en';
  const availableLocales = moment.locales();
  const normalizedLocale = locale.replace(/_/g, '-').toLowerCase();
  if (!_.includes(availableLocales, normalizedLocale)) {
    return fallback;
  }
  return normalizedLocale;
}

const getCurrentLocale = async () => {
  const locale = await Localization.getCurrentLocaleAsync();
  return normalizeLocale(locale);
}

const setCalendarsLocale = async () => {
  const locale = await getCurrentLocale();
  LocaleConfig.locales['en'] = LocaleConfig.locales['']; // set en as fallback
  LocaleConfig.locales['pt-br'] = calendarLocales.pt;
  LocaleConfig.locales['pt'] = calendarLocales.pt;
  LocaleConfig.defaultLocale = locale;
}

export { getCurrentLocale, setCalendarsLocale };
