import * as React from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n/config';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
import { Features } from './components/Features';
import { Steps } from './components/Steps';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set initial direction and language
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', i18n.language);

    // Apply font family based on language
    const fontFamily = i18n.language === 'ar' 
      ? '"Avenir Next Arabic"'
      : '"Epilogue", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    
    document.documentElement.style.fontFamily = fontFamily;
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className=''>
        <Hero />
        <VideoSection />
        <Features />
        <Steps />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;