import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const isArabic = lang === 'ar';

  return (
    <footer className="bg-secondary m-10 rounded-2xl text-white py-12">
      <div
        className={`container mx-auto px-4 ${isArabic ? 'text-right' : 'text-left'}`}
        dir={isArabic ? 'rtl' : 'ltr'}
      >
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 ${isArabic ? 'md:text-right' : ''}`}>
          {/* Logo and About */}
          <div className={`md:col-span-2  ${isArabic ? '' : ''}`}>
            <div className={`flex items-center mb-4 ${isArabic ? '' : ''}`}>
              <img
                src={isArabic ? '/logo/logo-white-ar.svg' : '/logo/logo-white-en.svg'}
                className="w-32 h-auto object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t('footer.about')}</h3>
            <p className="text-teal-100 text-sm">{t('footer.about_desc')}</p>
          </div>

          {/* Links */}
          <div className={`${isArabic ? 'text-right' : ''}`}>
            <h4 className="text-lg font-semibold mb-4">{t('footer.links')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-teal-100 hover:text-white transition-colors"
                >
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-teal-100 hover:text-white transition-colors"
                >
                  {t('footer.terms')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-teal-100 hover:text-white transition-colors"
                >
                  {t('footer.support')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={`${isArabic ? 'text-right' : ''}`}>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-2 text-sm">
              <div className={`flex items-center gap-2 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
                <Phone className="w-4 h-4" />
                <span className="text-teal-100">{t('footer.phone')}</span>
              </div>
              <div className={`flex items-center gap-2 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
                <Mail className="w-4 h-4" />
                <span className="text-teal-100">{t('footer.email')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-8 pt-8 text-center">
          <p className="text-teal-100 text-sm">{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};
