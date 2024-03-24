import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import  en  from "./locals/en/en.js";
import  ko  from "./locals/ko/ko.js";


i18n
  .use(initReactI18next)
  .init({
    resources :{
      en: { // 영어
        translation: en
      },
      ko: { // 한국어
        translation: ko
      }
    },
    lng: "en",
    fallbackLng: "en", // detected lng이 불가능 할때 en을 사용하겠다.

    keySeparator: false, // 'messages.welcome' 와 같은 키 형식의 form을 사용할지 여부

    interpolation: {
      escapeValue: false // react already safes from xss
      // xss가 스크립트 코드를 삽입하여 사용자를 대상으로 한 공격이라고 하는데 이건 잘 모르겠다. 흠...
    }
  });

export default i18n;