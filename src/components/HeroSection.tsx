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

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-muted-foreground text-lg tracking-widest uppercase font-mono">
              Olá, eu sou
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              <span className="typewriter-cursor font-mono">{displayText}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
              Transformando dados em insights estratégicos para impulsionar decisões de negócio.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#projetos"
                className="px-8 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-all duration-300"
              >
                Ver Projetos
              </a>
              <a
                href="#sobre"
                className="px-8 py-3 border border-foreground/30 text-foreground font-medium rounded-lg hover:bg-foreground/10 transition-all duration-300"
              >
                Sobre Mim
              </a>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-[400px] h-[550px] md:w-[500px] md:h-[700px]">
              <img
                src={profileImage}
                alt="Analista de Dados"
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
