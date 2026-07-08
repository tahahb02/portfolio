import { createContext, useContext, useState, useCallback } from "react";
import { translations, contentTranslations, defaultLang } from "../i18n/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("lang") || defaultLang; } catch { return defaultLang; }
  });

  const changeLang = useCallback((l) => {
    setLang(l);
    try { localStorage.setItem("lang", l); } catch {}
  }, []);

  const t = translations[lang];
  const content = contentTranslations[lang];

  return (
    <LanguageContext.Provider value={{ lang, changeLang, t, content }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
