import { useEffect, useState } from "react";
import profileImage from "@/assets/profile.png";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Analista de Dados";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre Mim", href: "#sobre" },
    { label: "Portfolio", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <section id="inicio" className="relative min-h-screen bg-background overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 px-8 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-2xl font-bold text-foreground">Portfolio</span>
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors duration-300 text-sm tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
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

      {/* Content - Aligned Right */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8">
        <div className="w-full max-w-6xl flex flex-col items-center md:items-end md:pr-[35%] lg:pr-[40%]">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 animate-fade-in-up text-center md:text-right">
            Carlos Amaral
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 font-light text-center md:text-right">
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
