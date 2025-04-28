
import { useTranslation } from "@/hooks/useTranslation";

export const AboutSection = () => {
  const { t } = useTranslation();

  const team = [
    {
      name: "Sophie Martin",
      role: "CEO & Founder",
    },
    {
      name: "Jean Dupont",
      role: "CTO",
    },
    {
      name: "Marie Leclerc",
      role: "Head of HR",
    },
  ];

  return (
    <section id="about" className="bg-secondary py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title">{t('aboutTitle')}</h2>
            <p className="text-lg mb-6">{t('aboutDesc')}</p>
            <p className="mb-8">{t('aboutContent')}</p>
          </div>
          
          <div className="relative">
            <div className="bauhaus-border aspect-square bg-white p-8 relative">
              <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-accent"></div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-black"></div>
              <div className="relative z-10 h-full w-full flex items-center justify-center">
                <span className="font-mono text-white text-4xl font-bold">2023</span>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-2/3 h-2/3 bauhaus-border bg-white"></div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-3xl font-mono mb-10">{t('team')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="magic-hover">
                <div className="h-full bauhaus-border bg-white p-6 relative overflow-hidden">
                  <div className="aspect-square bg-secondary mb-6 flex items-center justify-center">
                    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                      <path d="M4 18C4 14.6863 7.58172 12 12 12C16.4183 12 20 14.6863 20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-mono font-bold">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
