import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground font-mono">
                Analista de Dados
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Transformando dados em decisões estratégicas.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Contato</h4>
              <div className="space-y-3">
                <a
                  href="mailto:contato@email.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  contato@email.com
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Redes</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-secondary rounded-lg hover:bg-foreground hover:text-background transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-secondary rounded-lg hover:bg-foreground hover:text-background transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border text-center">
            <p className="text-muted-foreground text-sm font-mono">
              © {currentYear} Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
