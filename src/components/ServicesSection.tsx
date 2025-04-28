
import { useTranslation } from "@/hooks/useTranslation";

export const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('service1Title'),
      description: t('service1Desc'),
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M4 18C4 14.6863 7.58172 12 12 12C16.4183 12 20 14.6863 20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: t('service2Title'),
      description: t('service2Desc'),
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: t('service3Title'),
      description: t('service3Desc'),
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 9L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">{t('servicesTitle')}</h2>
          <p className="text-lg">{t('servicesDesc')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="magic-hover">
              <div className="h-full bg-white bauhaus-border p-8 flex flex-col items-center text-center">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-mono mb-4">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="relative inline-block">
            <a href="#contact" className="bauhaus-button">
              {t('heroCta')}
            </a>
            <div className="absolute -bottom-3 -right-3 w-full h-full bauhaus-border bg-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
