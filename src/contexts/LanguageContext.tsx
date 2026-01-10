import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language, translations } from '../utils/i18n';
import { detectLanguage } from '../utils/languageDetector';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // 检查是否在浏览器环境中
    if (typeof window === 'undefined') {
      return 'en';
    }
    // 从localStorage获取保存的语言，如果没有则自动检测
    try {
      const saved = localStorage.getItem('preferred-language') as Language | null;
      if (saved && ['en', 'zh', 'es', 'fr', 'de', 'ja'].includes(saved)) {
        return saved;
      }
      return detectLanguage();
    } catch (e) {
      return detectLanguage();
    }
  });

  // 保存语言选择到localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('preferred-language', language);
      } catch (e) {
        // 忽略localStorage错误
      }
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
