"use client";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-background sticky top-0 p-2 z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={isArabic ? "/logo/logo-ar.svg" : "/logo/logo-en.svg"}
              alt="Logo"
              className="w-32 h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse text-xl">
            <a
              href="#"
              className="text-secondary font-medium hover:text-secondary/60 transition-colors"
            >
              {t("home")}
            </a>
            <a
              href="#"
              className="text-secondary hover:text-secondary transition-colors"
            >
              {t("howitworks")}
            </a>
            <a
              href="#"
              className="text-secondary hover:text-secondary transition-colors"
            >
              {t("Features")}
            </a>
            <a
              href="#"
              className="text-secondary hover:text-secondary transition-colors"
            >
              {t("contact")}
            </a>
     
          </nav>

          {/* Actions (Language + Buttons) */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />

            <Button variant="ghost" size="sm">
              {t("login")}
            </Button>
            <Button size="sm" variant="secondary">
              {t("signup")}
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-secondary hover:text-secondary"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="flex flex-col space-y-3 p-4">
            <a
              href="#"
              className="text-secondary hover:text-secondary transition-colors"
            >
              {t("home")}
            </a>
            <a
              href="#"
              className="text-secondary hover:text-secondary transition-colors"
            >
              {t("howitworks")}
            </a>
            <a
              href="#"
              className="text-secondary hover:text-secondary transition-colors"
            >
              {t("Features")}
            </a>
            <a
              href="#"
              className="text-secondary hover:text-secondary transition-colors"
            >
              {t("contact")}
            </a>
     

            {/* Mobile buttons */}
            <div className="flex gap-2 pt-3">
              <Button variant="ghost" size="sm" className="flex-1">
                {t("login")}
              </Button>
              <Button size="sm" variant="default" className="flex-1">
                {t("signup")}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
