import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"; // shadcn/ui button

export const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <section className=" py-8 h-screen">
      <div className="container  mx-auto bg-white rounded-3xl  p-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">

        {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none  flex flex-col justify-between">
          <motion.div
            initial={{ y: -80, opacity: 0.8 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 21, repeat: Infinity, repeatType: "reverse" }}
            className="text-2xl font-bold text-white bg-white h"
          >
            {t('hero.floating_text')}
          </motion.div>
        </div> */}
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
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>
          {/* Content */}
          <motion.div 
            className={`flex-1 ${isArabic ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left pr-8`}
            initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-7xl font-semibold text-secondary mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-4xl text-secondary mb-8 max-w-lg mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>
            <div className={`flex gap-4 ${isArabic ? 'justify-end' : 'justify-start'} flex-row${isArabic ? '-reverse' : ''}`}>    
                    <Button variant="ghost" className="">
              {t('hero.learn_more')}
              </Button> 
                <Button
                className=""
                variant="default"
                asChild
                >
                <a href="https://eg.agribasket.co/en/register" target="_blank" rel="noopener noreferrer">
                  {t('hero.cta')}
                </a>
                </Button>
        </div>

       
          </motion.div>
        </div>
      </div>
    </section>
  );
};
