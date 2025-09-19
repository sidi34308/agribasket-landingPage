import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"; // shadcn/ui button

export const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  // Scroll handler
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80; // adjust if you have a sticky header
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-8" id="home">
      <div className="container mx-auto bg-white rounded-3xl p-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <motion.div
            className={`flex-1 ${isArabic ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left p-4`}
            initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-semibold text-secondary mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-2xl lg:text-4xl text-secondary mb-8 mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>

            <div className={`flex gap-4 ${isArabic ? "justify-end flex-row-reverse" : "justify-start"}`}>
              <Button variant="ghost" onClick={() => scrollToSection("videoSection")}>
                {t("hero.learn_more")}
              </Button>

              <Button variant="default" asChild>
                <a
                  href={`https://eg.agribasket.co/${isArabic ? "ar" : "en"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("hero.cta")}
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: isArabic ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/hero-image.png"
                alt="Fresh vegetables delivery"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
