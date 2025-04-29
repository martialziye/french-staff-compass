
import { useTranslation } from "@/hooks/useTranslation";
import { ArrowRight, Users, Activity, FileText } from "lucide-react";

export const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('service1Title'),
      description: t('service1Desc'),
      icon: <Users className="w-10 h-10 text-accent" />,
    },
    {
      title: t('service2Title'),
      description: t('service2Desc'),
      icon: <Activity className="w-10 h-10 text-accent" />,
    },
    {
      title: t('service3Title'),
      description: t('service3Desc'),
      icon: <FileText className="w-10 h-10 text-accent" />,
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-background via-background to-secondary/30"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">{t('servicesTitle')}</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">{t('servicesDesc')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-hover">
              <div className="h-full glass-card p-8 flex flex-col items-center text-center">
                <div className="mb-6 bg-accent/10 p-4 rounded-2xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-foreground/80">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <a href="#contact" className="modern-button group">
            {t('heroCta')}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
