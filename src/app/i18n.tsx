import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "fr" | "en";

type LangContextValue = {
  lang: Lang;
  toggle: () => void;
  /** t("texte français", "english text") */
  t: (fr: string, en: string) => string;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    return saved === "en" ? "en" : "fr";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang((l) => (l === "fr" ? "en" : "fr"));
  const t = (fr: string, en: string) => (lang === "fr" ? fr : en);

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

const fallback: LangContextValue = {
  lang: "fr",
  toggle: () => {},
  t: (fr) => fr,
};

export function useLang() {
  // Fallback FR si utilisé hors provider (ex. tests unitaires)
  return useContext(LangContext) ?? fallback;
}
