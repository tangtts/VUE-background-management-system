import { defineStore } from "pinia"
import i18n from "@/assets/languages/i18n";

export const useLanguageStore = defineStore('language', () => {
  const defaultLanguage = ref(localStorage.getItem('language') || 'en')
  function changeLanguage(language) {
    if (language === 'zh' || language === 'en') {
      defaultLanguage.value = language;
      localStorage.setItem('language', language)
      i18n.global.locale = language
    } else {
      console.warn('语言错误')
    }
  }



  return { defaultLanguage, changeLanguage }
})