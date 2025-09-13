import * as React from 'react';
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = ['faq1', 'faq2', 'faq3', 'faq4', 'faq5', 'faq6'];

export const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 " ref={ref}>
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-12"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.6 }}
        >
          {t('faq.title')}
        </motion.h2>

        <div className="space-y-4 ">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq}
              className="bg-white rounded-xl "
              initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
              animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
            <button
              className={`w-full px-6 py-5 flex items-center justify-between group ${
                openFaq === index ? 'rounded-t-xl' : 'rounded-xl'
              } ${t('faq.dir') === 'rtl' ? 'flex-row-reverse' : ''}`}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="text-lg font-medium text-secondary group-hover:text-primary transition-colors">
                  {t(faq)}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-secondary transition-transform duration-200 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === index && (
                <motion.div
                  className="px-6 pb-6"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-600">
                    هذا نص تجريبي للإجابة على السؤال. يمكن إضافة المحتوى المناسب هنا.
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};