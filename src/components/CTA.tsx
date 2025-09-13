import * as React from 'react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button"; // shadcn/ui button

export const CTA: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="flex flex-row items-center h-screen " ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
          animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
                 <Button className="" variant="default">

            {t('cta.button')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};