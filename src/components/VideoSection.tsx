import * as React from 'react';
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { Play } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100); // slight delay to ensure video is rendered
  };

  return (
    <section className="py-16 h-[50rem] " ref={ref} id="videoSection">
      <div className="container mx-auto px-4 ">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8 }}
          className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-secondary"
        >
          {!isPlaying ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/80 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePlay}
              >
                <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
              </motion.button>
            </div>
          ) : (
            <video
              ref={videoRef}
              src="/agribasket-ad.mp4"
              className="absolute inset-0 w-full h-full object-cover"
              controls
              autoPlay
            >
              {t('video.title')}
            </video>
          )}
        </motion.div>
      </div>
    </section>
  );
};