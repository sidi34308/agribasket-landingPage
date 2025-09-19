import * as React from 'react';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-green-500 transition-colors duration-200"
      aria-label="Switch Language"
    >
      {i18n.language === 'ar' ? (
        <>
          <ReactCountryFlag
            countryCode="GB"
            svg
            style={{ width: '20px', height: '20px', borderRadius: '40%' }}
          />
          <span className="text-sm font-medium">English</span>
        </>
      ) : (
        <>
          <ReactCountryFlag
            countryCode="EG"
            svg
            style={{ width: '20px', height: '20px', borderRadius: '40%' }}
          />
          <span className="text-sm font-medium">العربية</span>
        </>
      )}
    </button>
  );
};
