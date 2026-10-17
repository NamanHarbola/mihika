import { ReactNode } from 'react';
import { translations } from '../locales/translations';
import { LanguageContext } from './languageContextObject';

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const t = translations.en;

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
};
