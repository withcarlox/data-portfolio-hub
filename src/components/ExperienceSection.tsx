import { Building2, Calendar } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

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
  const { t } = useLanguage();

  return (
    <section id="experiencia" className="py-20 bg-background">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.experience.title}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {t.experience.jobs.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
