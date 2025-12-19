import { Building2, Calendar } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    company: "Empresa Alpha",
    role: "Analista de Dados Sênior",
    period: "2022 - Presente",
    description: "Desenvolvimento de dashboards e análises preditivas para tomada de decisão estratégica.",
  },
  {
    company: "Empresa Beta",
    role: "Analista de Dados Pleno",
    period: "2020 - 2022",
    description: "Criação de pipelines de dados e automação de relatórios gerenciais.",
  },
  {
    company: "Empresa Gamma",
    role: "Analista de Dados Júnior",
    period: "2018 - 2020",
    description: "Análise exploratória de dados e suporte à equipe de Business Intelligence.",
  },
  {
    company: "Empresa Delta",
    role: "Estagiário de Dados",
    period: "2017 - 2018",
    description: "Apoio na coleta e tratamento de dados para projetos internos.",
  },
  {
    company: "Empresa Epsilon",
    role: "Assistente de TI",
    period: "2016 - 2017",
    description: "Suporte técnico e introdução a conceitos de banco de dados.",
  },
  {
    company: "Empresa Zeta",
    role: "Freelancer",
    period: "2015 - 2016",
    description: "Projetos independentes de análise e visualização de dados.",
  },
];

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <div className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
          <Building2 className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {experience.company}
          </h3>
          <p className="text-primary font-medium text-sm mb-2">
            {experience.role}
          </p>
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
            <Calendar className="w-4 h-4" />
            <span>{experience.period}</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {experience.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-20 bg-background">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experiência Profissional
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Minha trajetória profissional na área de dados e tecnologia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
