const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-foreground mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }} />
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
            <p>
              Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="text-center">
              <p className="text-5xl font-bold text-foreground font-mono">3+</p>
              <p className="text-muted-foreground mt-2">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-foreground font-mono">15+</p>
              <p className="text-muted-foreground mt-2">Projetos Concluídos</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-foreground font-mono">5+</p>
              <p className="text-muted-foreground mt-2">Tecnologias</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
