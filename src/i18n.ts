import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'

import en from './translations/en/translation.json'
import nl from './translations/nl/translation.json'


i18n
  .use(Backend)
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',

    resources: {
      en: {
        common: en
      },
      nl: {
        common: nl
      }
    },

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  })

export default i18n
