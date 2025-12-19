import { useEffect, useState } from "react";
import profileImage from "@/assets/profile.png";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";

const HeroSection = () => {
  const { t } = useLanguage();
  const [displayText, setDisplayText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const fullText = t.hero.role;

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(typeText, 100);
      } else {
        timeout = setTimeout(() => {
          currentIndex = 0;
          setDisplayText("");
          typeText();
        }, 2000);
      }
    };

    typeText();

    return () => clearTimeout(timeout);
  }, [fullText]);

  const navItems = [
    { label: t.nav.home, href: "#inicio" },
    { label: t.nav.about, href: "#sobre" },
    { label: t.nav.experience, href: "#experiencia" },
    { label: t.nav.contact, href: "#contato" },
  ];

  return (
    <section id="inicio" className="relative min-h-screen bg-background overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-background/80 backdrop-blur-md border-b border-border/40 transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-2xl font-bold text-foreground">Portfolio</span>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors duration-300 text-sm tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border/40 p-4 flex flex-col gap-4 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors duration-300 text-sm tracking-wide py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-border/40">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </header>

      {/* Background Photo - Aligned Right */}
      <div className="absolute inset-0 flex justify-end items-end">
        <img
          src={profileImage}
          alt="Carlos Amaral"
          className="h-[95vh] w-auto object-contain object-bottom mr-12 lg:mr-24"
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/30" />

      {/* Content - Aligned Left */}
      <div className="relative z-10 min-h-screen flex flex-col justify-start pt-48 lg:justify-center lg:pt-0 pl-12 lg:pl-24">
        <div className="w-full max-w-6xl flex flex-col items-start lg:w-1/2">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 animate-fade-in-up text-left whitespace-nowrap">
            Carlos Amaral
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 font-light text-left">
            <span className="typewriter-cursor">{displayText}</span>
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
