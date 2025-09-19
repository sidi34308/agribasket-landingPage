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

      // // Features
      // "features.title": "ليه تختار أجري باسكت؟",
      // "feature1.title": "مزادات شفافةوعادلة",
      // "feature1.desc": "كل حاجة واضحة ومضمونة.",
      // "feature2.title": "وفر وقتك بعيداً عن الزحمة",
      // "feature2.desc": "سجّل وابدأ في دقائق بدون تعقيد.",
      // "feature3.title": "أسعار تنافسية وعروض حصرية",
      // "feature3.desc": "وفر أكتر وكسب أكتر مع أفضل الأسعار.",
      // "feature4.title": "شراء وبيع في مكان واحد",
      // "feature4.desc": "منصّة واحدة تخدم البائع والمشتري.",
      // "feature5.title": "من المزرعة للسفرة",
      // "feature5.desc": "بدون وسطاء؛ جودة وطزاجة أعلى.",
      // "feature6.title": "صفقات مضمونة وآمنة",
      // "feature6.desc": "حماية كاملة للمشترين والبائعين مع ضمان الجودة والدفع",
      
      // // Steps Section
      // "steps.title": "خطوات بسيطة للبيع",
      // "step1.title": "سجّل كبائع أو كمشتري",
      // "step1.desc": "انشئ حسابك في دقائق قليلة",
      // "step2.title": "بيع، اشترِ أو زايد على المنتجات",
      // "step2.desc": "اعرض منتجاتك واحصل على العملاء",
      // "step3.title": "اكسب ووفّر",
      // "step3.desc": "احصل على أرباح من كل عملية بيع",
      
      // // FAQ
      // "faq.title": "الأسئلة الشائعة",
      // "faq1": "ما هي شروط التسجيل؟",
      // "faq2": "كيف أطلب منتج معين؟",
      // "faq3": "هل يمكنني الطلب خارج عن نطاق التوصيل؟",
      // "faq4": "متى يتم التسليم؟",
      // "faq5": "كيف أتصل بخدمة العملاء؟",
      // "faq6": "هل يمكنني الطلب بكمية صغيرة؟",
      
      // // CTA Section
      // "cta.title": "سوقك أونلاين، مكسبك مضمون!",
      // "cta.subtitle": "ابدأ الان… وخلي السوق يشتغل لصالحك.",
      // "cta.button": "ابدأ الآن",
      
      // // Footer
      // "footer.about": "حول أجري باسكت",
      // "footer.about_desc": "منصة رائدة لربط المزارعين بالمستهلكين مباشرة",
      // "footer.links": "روابط مفيدة",
      // "footer.privacy": "سياسة الخصوصية",
      // "footer.terms": "الشروط والأحكام",
      // "footer.support": "المساعدة والدعم",
      // "footer.contact": "تواصل معنا",
      // "footer.phone": "+966 50 123 4567",
      // "footer.email": "info@agribasket.com",
      // "footer.rights": "جميع الحقوق محفوظة - أجري باسكت"
      "hero.title": "أجري باسكت… السوق الزراعي كله بين إيديك!",
"hero.subtitle": "منصة رقمية تربط المزارعين، التجار، والموزعين في مكان واحد",
"hero.cta": "جرّبها الآن",
"hero.learn_more": "معرفة المزيد",

"video.title": "ليه تختار أجري باسكت؟",

"features.title": "مميزاتنا للشركات والمزارعين",
"feature1.title": "مزادات شفافة وعادلة",
"feature1.desc": "تسعير واضح يساعدك في إغلاق صفقات موثوقة.",
"feature2.title": "توفير الوقت والتكاليف",
"feature2.desc": "بيع وشراء بكبسة زر بدون الحاجة لوسطاء.",
"feature3.title": "أسعار تنافسية بالجملة",
"feature3.desc": "عروض خاصة للتجار والموزعين بكميات كبيرة.",
"feature4.title": "شراء وبيع في منصة واحدة",
"feature4.desc": "سواء كنت مزارع أو تاجر، تلاقي كل شيء في مكان واحد.",
"feature5.title": "من المزرعة للأسواق",
"feature5.desc": "توصيل مباشر للأسواق، المطاعم، والموزعين.",
"feature6.title": "صفقات مضمونة وآمنة",
"feature6.desc": "ضمان الدفع وحماية المعاملات بين الأطراف.",

"steps.title": "خطوات بسيطة للبدء",
"step1.title": "سجّل كمزارع أو كتاجر",
"step1.desc": "إنشئ حسابك في دقائق وابدأ البيع أو الشراء.",
"step2.title": "اعرض منتجاتك أو ابحث عن موردين",
"step2.desc": "سواء كنت تبيع أو تشتري، كل شيء سهل وواضح.",
"step3.title": "أبرم صفقاتك بثقة",
"step3.desc": "استفد من شبكة موثوقة وضمان للأرباح.",

// FAQ
      "faq.title": "الأسئلة الشائعة",
      "faq1": "ما هي شروط التسجيل في أجري باسكت؟",
      "faq1.desc": "يمكن لأي مزارع، مورد، تاجر جملة، أو موزع التسجيل بسهولة عبر المنصة.",
      "faq2": "هل يمكنني بيع منتجاتي بكميات كبيرة؟",
      "faq2.desc": "نعم، المنصة تدعم صفقات الجملة والمزادات الخاصة للشركات والمزارعين.",
      "faq3": "هل يمكنني شراء منتجات من موردين مختلفين في نفس الوقت؟",
      "faq3.desc": "بالتأكيد، يمكنك إضافة منتجات من عدة موردين في نفس الطلب.",
      "faq4": "هل توفر المنصة خدمات لوجستية أو توصيل؟",
      "faq4.desc": "نعم، نساعدك على الربط مع شركاء لوجستيين لتوصيل المنتجات للأسواق أو المطاعم.",
      "faq5": "كيف أضمن أن المعاملة آمنة؟",
      "faq5.desc": "المنصة توفر نظام دفع محمي وضمان للجودة قبل إتمام الصفقة.",
      "faq6": "هل يمكنني التصدير أو الاستيراد عبر المنصة؟",
      "faq6.desc": "نعم، أجري باسكت يتيح فرص للتجار والموردين للوصول إلى أسواق إقليمية ودولية.",
      "faq7": "هل يمكن متابعة الأسعار لحظة بلحظة؟",
      "faq7.desc": "نعم، الأسعار والمزادات محدثة بشكل مباشر لمساعدتك في اتخاذ قرارات أفضل.",
      "faq8": "كيف أتواصل مع الدعم الفني أو فريق المبيعات؟",
      "faq8.desc": "يمكنك التواصل عبر البريد الإلكتروني، الهاتف، أو من خلال نموذج الاتصال في المنصة.",

      // CTA
      "cta.title": "سوقك الزراعي أونلاين… فرصتك للتوسع أكبر!",
      "cta.subtitle": "انضم الآن إلى شبكة من المزارعين، الموردين، والتجار… وحقق صفقات مربحة في كل مرة.",
      "cta.button": "سجّل شركتك الآن",

      // Footer
      "footer.about": "حول أجري باسكت",
      "footer.about_desc": "أجري باسكت منصة رقمية تربط المزارعين والموردين مباشرة مع التجار، الموزعين، والمشترين بالجملة لضمان صفقات عادلة وآمنة.",
      "footer.links": "روابط سريعة",
      "footer.home": "الرئيسية",
      "footer.howitworks": "كيف يعمل",
      "footer.features": "المميزات",
      "footer.contact": "تواصل معنا",
      "footer.support": "الدعم",
      "footer.faq": "الأسئلة الشائعة",
      "footer.privacy": "سياسة الخصوصية",
      "footer.terms": "الشروط والأحكام",
      "footer.techsupport": "الدعم الفني",
      "footer.phone": "+966 50 123 4567",
      "footer.email": "info@agribasket.com",
      "footer.rights": "جميع الحقوق محفوظة © أجري باسكت 2025"
,"getInTouch":"تواصل معنا "
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

  
  // // Features
  // "features.title": "Why choose AgriBasket?",
  // "feature1.title": "Transparent and Fair Auctions",
  // "feature1.desc": "Everything is clear and guaranteed.",
  // "feature2.title": "Save Time Away From Crowds",
  // "feature2.desc": "Register and start in minutes without complications.",
  // "feature3.title": "Competitive Prices and Exclusive Offers",
  // "feature3.desc": "Save more and earn more with the best prices.",
  // "feature4.title": "Buy and Sell in One Place",
  // "feature4.desc": "A single platform serving both buyers and sellers.",
  // "feature5.title": "From Farm to Table",
  // "feature5.desc": "No middlemen; higher quality and freshness.",
  // "feature6.title": "Guaranteed and Secure Deals",
  // "feature6.desc": "Full protection for buyers and sellers with quality and payment assurance.",
  
  // // Steps Section
  // "steps.title": "Simple Steps to Sell",
  // "step1.title": "Register as a Seller or Buyer",
  // "step1.desc": "Create your account in just a few minutes",
  // "step2.title": "Sell, Buy, or Bid on Products",
  // "step2.desc": "List your products and attract customers",
  // "step3.title": "Earn and Save",
  // "step3.desc": "Gain profits from every sale",
  
  // // FAQ
  // "faq.title": "Frequently Asked Questions",
  // "faq1": "What are the registration requirements?",
  // "faq2": "How can I order a specific product?",
  // "faq3": "Can I order outside the delivery area?",
  // "faq4": "When will delivery take place?",
  // "faq5": "How do I contact customer service?",
  // "faq6": "Can I order a small quantity?",
  
  // // CTA Section
  // "cta.title": "Your Market Online, Your Profit Guaranteed!",
  // "cta.subtitle": "Start now… and let the market work for you.",
  // "cta.button": "Get Started",
  
  // // Footer
  // "footer.about": "About AgriBasket",
  // "footer.about_desc": "A leading platform connecting farmers directly with consumers",
  // "footer.links": "Useful Links",
  // "footer.privacy": "Privacy Policy",
  // "footer.terms": "Terms & Conditions",
  // "footer.support": "Help & Support",
  // "footer.contact": "Contact Us",
  // "footer.phone": "+966 50 123 4567",
  // "footer.email": "info@agribasket.com",
  // "footer.rights": "All Rights Reserved - AgriBasket"

  "hero.title": "AgriBasket… The Agricultural Market in Your Hands!",
"hero.subtitle": "A digital platform connecting farmers, traders, and distributors in one place",
"hero.cta": "Try it now",
"hero.learn_more": "Learn More",

"video.title": "Why choose AgriBasket?",

"features.title": "Our Advantages for Businesses and Farmers",
"feature1.title": "Transparent and Fair Auctions",
"feature1.desc": "Clear pricing that helps you close reliable deals.",
"feature2.title": "Save Time and Costs",
"feature2.desc": "Buy and sell instantly without middlemen.",
"feature3.title": "Competitive Wholesale Prices",
"feature3.desc": "Exclusive offers for traders and distributors at scale.",
"feature4.title": "Buy and Sell in One Platform",
"feature4.desc": "Whether farmer or trader, everything is in one place.",
"feature5.title": "From Farm to Markets",
"feature5.desc": "Direct delivery to markets, restaurants, and distributors.",
"feature6.title": "Secure and Guaranteed Deals",
"feature6.desc": "Assured payments and protected transactions between parties.",

"steps.title": "Simple Steps to Get Started",
"step1.title": "Register as Farmer or Trader",
"step1.desc": "Create your account in minutes and start trading.",
"step2.title": "List Products or Find Suppliers",
"step2.desc": "Whether buying or selling, everything is seamless.",
"step3.title": "Close Deals with Confidence",
"step3.desc": "Benefit from a trusted network and guaranteed profits.",

// FAQ
      "faq.title": "Frequently Asked Questions",
      "faq1": "What are the registration requirements?",
      "faq1.desc": "Any farmer, supplier, wholesaler, or distributor can easily register on the platform.",
      "faq2": "Can I sell my products in bulk?",
      "faq2.desc": "Yes, the platform supports wholesale deals and private auctions for businesses and farmers.",
      "faq3": "Can I purchase from multiple suppliers at once?",
      "faq3.desc": "Absolutely, you can add products from different suppliers in a single order.",
      "faq4": "Does the platform provide logistics or delivery services?",
      "faq4.desc": "Yes, we help connect you with logistics partners to deliver products to markets or restaurants.",
      "faq5": "How do I ensure the transaction is secure?",
      "faq5.desc": "The platform offers protected payment and quality assurance before completing the deal.",
      "faq6": "Can I export or import through the platform?",
      "faq6.desc": "Yes, AgriBasket provides opportunities for traders and suppliers to access regional and global markets.",
      "faq7": "Can I track prices in real time?",
      "faq7.desc": "Yes, prices and auctions are updated live to help you make better decisions.",
      "faq8": "How can I contact support or sales team?",
      "faq8.desc": "You can reach us via email, phone, or the contact form on the platform.",

      // CTA
      "cta.title": "Your Agri-Market Online… Your Opportunity to Grow Bigger!",
      "cta.subtitle": "Join a network of farmers, suppliers, and traders today… and close profitable deals every time.",
      "cta.button": "Register Your Business",

      // Footer
      "footer.about": "About AgriBasket",
      "footer.about_desc": "AgriBasket is a digital platform connecting farmers and suppliers directly with traders, distributors, and wholesale buyers for fair and secure deals.",
      "footer.links": "Quick Links",
      "footer.home": "Home",
      "footer.howitworks": "How It Works",
      "footer.features": "Features",
      "footer.contact": "Contact Us",
      "footer.support": "Support",
      "footer.faq": "FAQs",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms & Conditions",
      "footer.techsupport": "Technical Support",
      "footer.phone": "+966 50 123 4567",
      "footer.email": "info@agribasket.com",
      "footer.rights": "All Rights Reserved © AgriBasket 2025"
,"getInTouch":"Get in Touch "
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