import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    key: 'step1',
    images: {
      en: '/steps/1-en.png',
      ar: '/steps/1-ar.png'
    }
  },
  {
    key: 'step2', 
    images: {
      en: '/steps/2-en.png',
      ar: '/steps/2-ar.png'
    }
  },
  {
    key: 'step3',
    images: {
 en: '/steps/3-en.png',
      ar: '/steps/3-ar.png'
    }
  }
];

export const Steps: React.FC = () => {
  const { t, i18n } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const lang = i18n.language || 'en';

  return (
    <section className="py-16 " ref={ref} id="howitworks">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-12"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.6 }}
        >
          {t('steps.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.key}
              className="card-bg rounded-2xl  text-white text-center py-10 relative overflow-hidden"
              initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.9 }}
              animate={isInView ? { opacity: 1, filter: 'blur(0px)', scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.4 }}
            >
              <div className="relative z-10 ">
                <h3 className="text-2xl font-semibold mb-3">
                  {t(`${step.key}.title`)}
                </h3>
                <p className="text-teal-100 text-sm mb-6">
                  {t(`${step.key}.desc`)}
                </p>
                <div className="w-full h-[350px] relative">
                  <img
                  src={step.images[lang] || step.images.en}
                  alt={t(`${step.key}.title`)}
                  className={`absolute inset-0 w-full h-full object-cover ${lang === 'en' ? 'ml-8' : 'mr-8'}`}
                  style={lang === 'ar' ? { objectPosition: 'right bottom' } : { objectPosition: 'left bottom' }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};