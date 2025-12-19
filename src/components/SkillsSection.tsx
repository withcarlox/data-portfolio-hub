import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: "Python", level: 90, color: "bg-foreground" },
  { name: "SQL", level: 85, color: "bg-foreground" },
  { name: "Power BI", level: 80, color: "bg-foreground" },
  { name: "Excel", level: 95, color: "bg-foreground" },
  { name: "Tableau", level: 70, color: "bg-foreground" },
  { name: "R", level: 65, color: "bg-foreground" },
];

const SkillBar = ({ skill, isVisible, delay }: { skill: Skill; isVisible: boolean; delay: number }) => {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-foreground font-medium font-mono">{skill.name}</span>
        <span className="text-muted-foreground font-mono text-sm">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
          style={{
            width: isVisible ? `${skill.level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Tecnologias
          </h2>
          <div className="w-20 h-1 bg-foreground mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }} />
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Ferramentas e linguagens que utilizo para transformar dados brutos em insights valiosos.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                isVisible={isVisible}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
