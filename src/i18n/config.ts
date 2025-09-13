import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ar: {
    translation: {
      // Header
      "home": "الرئيسية",
      "howitworks": "كيف يعمل",
      "Features": "المميزات",
      "contact": "تواصل معنا",
      
      "login": "تسجيل الدخول",
      "signup": "إنشاء حساب",
      // Hero Section
      "hero.title": "أجري باسكت…السوق كله بين إيديك!",
      "hero.subtitle": "اشترِ وبيع منتجاتك الزراعية بسهولة وأمان",
      "hero.cta": "جرّبها الآن",
      "hero.learn_more": "معرفة المزيد",
      
      // Video Section
      "video.title": "ليه تختار أجري باسكت؟",
      
      // Features
      "features.title": "ليه تختار أجري باسكت؟",
      "feature1.title": "مزادات شفافةوعادلة",
      "feature1.desc": "كل حاجة واضحة ومضمونة.",
      "feature2.title": "وفر وقتك بعيداً عن الزحمة",
      "feature2.desc": "سجّل وابدأ في دقائق بدون تعقيد.",
      "feature3.title": "أسعار تنافسية وعروض حصرية",
      "feature3.desc": "وفر أكتر وكسب أكتر مع أفضل الأسعار.",
      "feature4.title": "شراء وبيع في مكان واحد",
      "feature4.desc": "منصّة واحدة تخدم البائع والمشتري.",
      "feature5.title": "من المزرعة للسفرة",
      "feature5.desc": "بدون وسطاء؛ جودة وطزاجة أعلى.",
      "feature6.title": "صفقات مضمونة وآمنة",
      "feature6.desc": "حماية كاملة للمشترين والبائعين مع ضمان الجودة والدفع",
      
      // Steps Section
      "steps.title": "خطوات بسيطة للبيع",
      "step1.title": "سجّل كبائع أو كمشتري",
      "step1.desc": "انشئ حسابك في دقائق قليلة",
      "step2.title": "بيع، اشترِ أو زايد على المنتجات",
      "step2.desc": "اعرض منتجاتك واحصل على العملاء",
      "step3.title": "اكسب ووفّر",
      "step3.desc": "احصل على أرباح من كل عملية بيع",
      
      // FAQ
      "faq.title": "الأسئلة الشائعة",
      "faq1": "ما هي شروط التسجيل؟",
      "faq2": "كيف أطلب منتج معين؟",
      "faq3": "هل يمكنني الطلب خارج عن نطاق التوصيل؟",
      "faq4": "متى يتم التسليم؟",
      "faq5": "كيف أتصل بخدمة العملاء؟",
      "faq6": "هل يمكنني الطلب بكمية صغيرة؟",
      
      // CTA Section
      "cta.title": "سوقك أونلاين، مكسبك مضمون!",
      "cta.subtitle": "ابدأ الان… وخلي السوق يشتغل لصالحك.",
      "cta.button": "ابدأ الآن",
      
      // Footer
      "footer.about": "حول أجري باسكت",
      "footer.about_desc": "منصة رائدة لربط المزارعين بالمستهلكين مباشرة",
      "footer.links": "روابط مفيدة",
      "footer.privacy": "سياسة الخصوصية",
      "footer.terms": "الشروط والأحكام",
      "footer.support": "المساعدة والدعم",
      "footer.contact": "تواصل معنا",
      "footer.phone": "+966 50 123 4567",
      "footer.email": "info@agribasket.com",
      "footer.rights": "جميع الحقوق محفوظة - أجري باسكت"
    }
  },
  en: {
   translation: {
  // Header
  "home": "Home",
  "howitworks": "How It Works",
  "Features": "Features",
  "contact": "Contact Us",
  
  "login": "Login",
  "signup": "Sign Up",
  // Hero Section
  "hero.title": "AgriBasket… The whole market in your hands!",
  "hero.subtitle": "Buy and sell your agricultural products easily and safely",
  "hero.cta": "Try it now",
  "hero.learn_more": "Learn More",
  
  // Video Section
  "video.title": "Why choose AgriBasket?",
  
  // Features
  "features.title": "Why choose AgriBasket?",
  "feature1.title": "Transparent and Fair Auctions",
  "feature1.desc": "Everything is clear and guaranteed.",
  "feature2.title": "Save Time Away From Crowds",
  "feature2.desc": "Register and start in minutes without complications.",
  "feature3.title": "Competitive Prices and Exclusive Offers",
  "feature3.desc": "Save more and earn more with the best prices.",
  "feature4.title": "Buy and Sell in One Place",
  "feature4.desc": "A single platform serving both buyers and sellers.",
  "feature5.title": "From Farm to Table",
  "feature5.desc": "No middlemen; higher quality and freshness.",
  "feature6.title": "Guaranteed and Secure Deals",
  "feature6.desc": "Full protection for buyers and sellers with quality and payment assurance.",
  
  // Steps Section
  "steps.title": "Simple Steps to Sell",
  "step1.title": "Register as a Seller or Buyer",
  "step1.desc": "Create your account in just a few minutes",
  "step2.title": "Sell, Buy, or Bid on Products",
  "step2.desc": "List your products and attract customers",
  "step3.title": "Earn and Save",
  "step3.desc": "Gain profits from every sale",
  
  // FAQ
  "faq.title": "Frequently Asked Questions",
  "faq1": "What are the registration requirements?",
  "faq2": "How can I order a specific product?",
  "faq3": "Can I order outside the delivery area?",
  "faq4": "When will delivery take place?",
  "faq5": "How do I contact customer service?",
  "faq6": "Can I order a small quantity?",
  
  // CTA Section
  "cta.title": "Your Market Online, Your Profit Guaranteed!",
  "cta.subtitle": "Start now… and let the market work for you.",
  "cta.button": "Get Started",
  
  // Footer
  "footer.about": "About AgriBasket",
  "footer.about_desc": "A leading platform connecting farmers directly with consumers",
  "footer.links": "Useful Links",
  "footer.privacy": "Privacy Policy",
  "footer.terms": "Terms & Conditions",
  "footer.support": "Help & Support",
  "footer.contact": "Contact Us",
  "footer.phone": "+966 50 123 4567",
  "footer.email": "info@agribasket.com",
  "footer.rights": "All Rights Reserved - AgriBasket"
}

  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;