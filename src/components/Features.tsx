import * as React from 'react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { Truck, Clock, Tag, ShoppingBag, Leaf, Shield } from 'lucide-react';

const features = [
  { key: 'feature1', icon: "/icons/balance.svg" },
  { key: 'feature2', icon: "/icons/Frame.svg" },
  { key: 'feature3', icon: "/icons/price.svg" },
  { key: 'feature4', icon: "/icons/store.svg" },
  { key: 'feature5', icon: "/icons/apple.svg" },
  { key: 'feature6', icon: "/icons/safe.svg"  },
];

export const Features: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="min-h-screen flex items-center"  ref={ref} id="features">
      <div className="container mx-auto p-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-12"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.6 }}
        >
          {t('features.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-white rounded-[1.5rem]">
          {features.map((feature, index) => {
            return (
              <motion.div
          key={feature.key}
          className=" p-6 rounded-xl  transition-shadow duration-200 py-10 px-10"
          initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
          animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
          transition={{ duration: 1.2, delay: index * 0.2 }}
              >
          <img src={`${feature.icon}`} className="mb-4" />
          <h3 className="text-xl font-semibold text-secondary mb-2">
            {t(`${feature.key}.title`)}
          </h3>
          <p className="text-secondary text-lg">
            {t(`${feature.key}.desc`)}
          </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};