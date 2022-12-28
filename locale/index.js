import siteConfigs from "@/siteconfigs"
import {nextTick} from "vue"
import { createI18n } from "vue-i18n/index"
import { getLocalLang } from '@/utils/common';


const DEFAULT_LANG = getLocalLang(siteConfigs.defaultLanguage) ;

const i18n = setupI18n({
    legacy: false,
    locale: DEFAULT_LANG,
    messages: {},
    fallbackLocale: DEFAULT_LANG,
    globalInjection: true,
    // silentTranslationWarn: true,
    // silentFallbackWarn: true,
    fallbackWarn: false,
    missingWarn: false
  });


  export function setupI18n(options = { locale: siteConfigs.defaultLanguage }) {
    const i18n = createI18n(options)
    setI18nLanguage(i18n, options.locale)
    return i18n
  }

  export function setI18nLanguage(i18n, locale) {
    if (i18n.mode === 'legacy') {
      i18n.global.locale = locale
    } else {
      i18n.global.locale.value = locale
    }
    document.querySelector('html').setAttribute('lang', locale)
  }

  export async function loadLocaleMessages(i18n, locale) {
    // load locale messages with dynamic import
    const messages = await import(`./lang/${locale}.js`)
    // set locale and locale message
    i18n.global.setLocaleMessage(locale, messages.default)
    
    // set local
    setI18nLanguage(i18n, locale)
    // next tick
    return nextTick()
  }
  
  loadLocaleMessages(i18n, DEFAULT_LANG).then(() => {
    //console.log("init i18n");
  });

  export function getLangs(){
    return [
      { label: "中文简体", value: "zh-CN" },
      { label: "English", value: "en-US" },
    ];
  }

  export default i18n;
