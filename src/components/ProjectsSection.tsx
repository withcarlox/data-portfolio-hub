import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

const projects: Project[] = [
  {
    title: "Dashboard de Vendas",
    description: "Dashboard interativo desenvolvido em Power BI para análise de vendas e performance de equipe comercial.",
    tags: ["Power BI", "DAX", "SQL"],
  },
  {
    title: "Análise de Churn",
    description: "Modelo preditivo para identificar clientes com maior probabilidade de cancelamento utilizando Machine Learning.",
    tags: ["Python", "Scikit-learn", "Pandas"],
  },
  {
    title: "ETL Pipeline",
    description: "Pipeline de dados automatizado para extração, transformação e carregamento de dados em data warehouse.",
    tags: ["Python", "Airflow", "PostgreSQL"],
  },
  {
    title: "Relatório Financeiro",
    description: "Sistema de relatórios automatizados para acompanhamento de indicadores financeiros em tempo real.",
    tags: ["Excel", "VBA", "Power Query"],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <div
      className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-400 transition-all duration-300 opacity-0 animate-scale-in shadow-sm"
      style={{ animationDelay: `${index * 150 + 200}ms` }}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <span className="text-black font-mono font-bold text-lg">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Ver no GitHub">
            <Github className="w-5 h-5 text-gray-500 hover:text-black transition-colors" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Ver projeto">
            <ExternalLink className="w-5 h-5 text-gray-500 hover:text-black transition-colors" />
          </button>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-600 leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-mono rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Projetos
          </h2>
          <div className="w-20 h-1 bg-black mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }} />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
