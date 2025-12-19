import { useLanguage } from "../contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {t.about.title}
          </h2>
          <div className="w-20 h-1 bg-black mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }} />

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>


        </div>
      </div>
    </section>
  );
};

export default AboutSection;
