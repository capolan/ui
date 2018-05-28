import { DangerZone } from 'expo';
import moment from 'moment/min/moment-with-locales';
import * as _ from 'lodash';
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

export { getCurrentLocale };
