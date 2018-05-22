import { DangerZone } from 'expo';
const { Localization } = DangerZone;

const normalizeLocale = (locale) => {
  let locales = locale.replace(/_/g, '-').split('-');
  let normalizedLocale = locales[0];
  if (locales.length > 1) {
    normalizedLocale += '-' + locales[1].toUpperCase();
  }
  return normalizedLocale;
}

const getCurrentLocale = async () => {
  let locale = 'pt-BR';
  locale = await Localization.getCurrentLocaleAsync();
  return normalizeLocale(locale);
}

export { getCurrentLocale };
