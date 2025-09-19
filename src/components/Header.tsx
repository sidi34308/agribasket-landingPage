"use client";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
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

      // Only update active section if we're on the home page
      if (location.pathname === "/") {
        const sections = ["home", "howitworks", "features"];
        const sectionElements = sections.map((id) =>
          document.getElementById(id)
        );
        const currentSection = sectionElements.find((section, index) => {
          if (!section) return false;
          const nextSection = sectionElements[index + 1];
          const sectionTop = section.offsetTop - 100; // Offset for header height

          if (nextSection) {
            return (
              currentScrollY >= sectionTop &&
              currentScrollY < nextSection.offsetTop - 100
            );
          }
          return currentScrollY >= sectionTop;
        });

        if (currentSection) {
          setActiveSection(currentSection.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first then scroll
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      setIsOpen(false);
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

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
            <Link to="/">
              <img
                src={isArabic ? "/logo/logo-ar.svg" : "/logo/logo-en.svg"}
                alt="Logo"
                className="w-44 h-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse text-xl">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-secondary font-medium hover:text-primary transition-colors ${
                location.pathname === "/" && activeSection === "home"
                  ? "text-primary font-bold"
                  : ""
              }`}
            >
              {t("home")}
            </button>
            <button
              onClick={() => scrollToSection("howitworks")}
              className={`text-secondary hover:text-primary transition-colors ${
                location.pathname === "/" && activeSection === "howitworks"
                  ? "text-primary font-bold"
                  : ""
              }`}
            >
              {t("howitworks")}
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className={`text-secondary hover:text-primary transition-colors ${
                location.pathname === "/" && activeSection === "features"
                  ? "text-primary font-bold"
                  : ""
              }`}
            >
              {t("Features")}
            </button>
            <Link
              to="/contact"
              className="text-secondary hover:text-primary transition-colors"
            >
              {t("contact")}
            </Link>
          </nav>

          {/* Actions (Language + Buttons) */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <div className="hidden md:flex gap-2">
              <Button variant="ghost" size="sm">
                <a
                  href={`https://eg.agribasket.co/${isArabic ? "ar" : "en"}/login`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("login")}
                </a>
              </Button>
              <Button size="sm" variant="default">
                <a
                  href={`https://eg.agribasket.co/${isArabic ? "ar" : "en"}/register`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("signup")}
                </a>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-secondary hover:text-primary"
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
          <nav className="flex flex-col gap-4 p-4 text-xl">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-secondary hover:text-primary transition-colors text-left ${
                location.pathname === "/" && activeSection === "home"
                  ? "text-primary font-bold"
                  : ""
              }`}
            >
              {t("home")}
            </button>
            <button
              onClick={() => scrollToSection("howitworks")}
              className={`text-secondary hover:text-primary transition-colors text-left ${
                location.pathname === "/" && activeSection === "howitworks"
                  ? "text-primary font-bold"
                  : ""
              }`}
            >
              {t("howitworks")}
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className={`text-secondary hover:text-primary transition-colors text-left ${
                location.pathname === "/" && activeSection === "features"
                  ? "text-primary font-bold"
                  : ""
              }`}
            >
              {t("Features")}
            </button>
            <Link
              to="/contact"
              className="text-secondary hover:text-primary transition-colors text-left"
              onClick={() => setIsOpen(false)}
            >
              {t("contact")}
            </Link>

            {/* Mobile buttons */}
            <div className="flex gap-2 pt-3">
              <Button variant="ghost" size="sm" className="flex-1">
                <a
                  href={`https://eg.agribasket.co/${isArabic ? "ar" : "en"}/login`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("login")}
                </a>
              </Button>
              <Button size="sm" variant="default" className="flex-1">
                <a
                  href={`https://eg.agribasket.co/${isArabic ? "ar" : "en"}/register`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("signup")}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
