import { createI18n } from 'vue-i18n'
import en from "./en";
import zh from "./zh";


const i18n = createI18n({
  locale: localStorage.getItem("language") || "zh",
  fallbackLocale: 'en',
  messages: {
    en,
    zh
  }
})

export default i18n