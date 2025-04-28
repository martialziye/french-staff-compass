
import { useTranslation } from "@/hooks/useTranslation";

export const ProductSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('feature1Title'),
      description: t('feature1Desc'),
      color: 'bg-accent',
    },
    {
      title: t('feature2Title'),
      description: t('feature2Desc'),
      color: 'bg-black',
    },
    {
      title: t('feature3Title'),
      description: t('feature3Desc'),
      color: 'bg-accent',
    },
    {
      title: t('feature4Title'),
      description: t('feature4Desc'),
      color: 'bg-black',
    },
  ];

  return (
    <section id="product" className="bg-secondary py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">{t('productTitle')}</h2>
          <p className="text-lg">{t('productDesc')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="magic-hover">
              <div className="h-full bg-white bauhaus-border p-6 relative">
                <div className={`absolute top-0 right-0 w-16 h-16 ${feature.color}`}></div>
                <h3 className="text-2xl font-mono mb-4 pr-16">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white bauhaus-border p-8 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-accent"></div>
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-mono mb-6">StaffCompass Dashboard</h3>
                <p className="mb-6">
                  Our intuitive dashboard gives you a complete overview of your business operations,
                  with easy access to all the tools you need to manage your staff efficiently.
                </p>
                <a href="#contact" className="bauhaus-button">
                  {t('heroCta')}
                </a>
              </div>
              <div className="bauhaus-border aspect-video bg-secondary relative overflow-hidden flex items-center justify-center">
                <span className="font-mono text-xl text-center px-6">
                  [Dashboard Preview]
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
