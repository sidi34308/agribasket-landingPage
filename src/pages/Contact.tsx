import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const ContactPage = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div
      className={`min-h-screen bg-background ${isArabic ? "text-right" : "text-left"}`}
     
    >
      <Header />

      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          {/* Map Section */}
          <div className={isArabic ? "md:order-2" : ""}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110565.24972005918!2d31.16864095!3d30.05961135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840d54a5e2f67%3A0x55cf6a5f0e2ef0db!2z2KfZhNiz2YrYp9ix2Ykg2YLYt9i52YUg2YTZhNmF2K3Yp9mG2Ykg2KfZhNi62YrYqQ!5e0!3m2!1sen!2seg!4v1726753500000!5m2!1sen!2seg"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8">{t("getInTouch")}</h2>

    <div className="flex flex-col gap-4">
  {/* Phone */}
  <div 
  
  className={`flex items-center gap-4 bg-white p-4 rounded-2xl ${isArabic ? "flex-row-reverse" : "flex-row"}`}>
    <div className=" p-3 rounded-full">
      <Phone className="h-5 w-5 text-primary" />
    </div>
    <p className="text-gray-700 text-lg">+20 232322113</p>
  </div>

  {/* Email */}
  <div className={`flex items-center gap-4 bg-white p-4 rounded-2xl ${isArabic ? "flex-row-reverse" : "flex-row"}`}>
    <div className=" p-3 rounded-full">
      <Mail className="h-5 w-5 text-primary" />
    </div>
    <p className="text-gray-700 text-lg">info@agribasket.com</p>
  </div>

  {/* Location */}
  <div className={`flex items-center gap-4 bg-white p-4 rounded-2xl ${isArabic ? "flex-row-reverse" : "flex-row"}`}>
    <div className=" p-3 rounded-full">
      <MapPin className="h-5 w-5 text-primary" />
    </div>
    <p className="text-gray-700 text-lg">مصر</p>
  </div>
</div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
