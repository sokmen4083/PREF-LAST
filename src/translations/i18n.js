import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { TRANSLATIONS_DE } from './de/translations'
import { TRANSLATIONS_EN } from './en/translations'
import { TRANSLATIONS_FR } from './fr/translations'
import { TRANSLATIONS_IT } from './it/translations'
import { TRANSLATIONS_TR } from './tr/translations'
import { TRANSLATIONS_AR } from './ar/translations'
import { TRANSLATIONS_KR } from './kr/translations'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: {
        translation: TRANSLATIONS_DE,
      },
      en: {
        translation: TRANSLATIONS_EN,
      },
      fr: {
        translation: TRANSLATIONS_FR,
      },
      it: {
        translation: TRANSLATIONS_IT,
      },
      tr: {
        translation: TRANSLATIONS_TR,
      },
      ar: {
        translation: TRANSLATIONS_AR,
      },
      kr: {
        translation: TRANSLATIONS_KR,
      },
    },
  })

i18n.changeLanguage('en')
