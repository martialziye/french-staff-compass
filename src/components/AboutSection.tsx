
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
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-background"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title">
              <span className="gradient-text">{t('aboutTitle')}</span>
            </h2>
            <p className="text-lg mb-6 text-foreground/80">{t('aboutDesc')}</p>
            <p className="mb-8 text-foreground/80">{t('aboutContent')}</p>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl shadow-xl bg-gradient-to-br from-accent to-blue-500 aspect-square p-8 relative overflow-hidden">
              <div className="absolute inset-0 mix-blend-overlay">
                <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-black/20 rounded-full blur-xl"></div>
              </div>
              <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-white">
                <span className="font-bold text-7xl">2023</span>
                <span className="text-xl mt-2">Founded in Paris</span>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-2/3 h-2/3 glass-card flex items-center justify-center">
              <div className="p-6 text-center">
                <div className="font-bold text-xl mb-2">{t('aboutTitle')}</div>
                <div className="text-sm text-foreground/70">
                  {t('aboutDesc').substring(0, 60)}...
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12">{t('team')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card-hover">
                <div className="h-full glass-card p-8 relative overflow-hidden">
                  <div className="aspect-square bg-accent/10 rounded-2xl mb-6 flex items-center justify-center">
                    <svg className="w-16 h-16 text-accent/70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                      <path d="M4 18C4 14.6863 7.58172 12 12 12C16.4183 12 20 14.6863 20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold">{member.name}</h4>
                  <p className="text-sm text-foreground/70">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
