
import { useTranslation } from "@/hooks/useTranslation";
import { ArrowRight, CheckCircle } from "lucide-react";

export const ProductSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('feature1Title'),
      description: t('feature1Desc'),
      icon: <CheckCircle className="h-6 w-6 text-accent" />,
    },
    {
      title: t('feature2Title'),
      description: t('feature2Desc'),
      icon: <CheckCircle className="h-6 w-6 text-accent" />,
    },
    {
      title: t('feature3Title'),
      description: t('feature3Desc'),
      icon: <CheckCircle className="h-6 w-6 text-accent" />,
    },
    {
      title: t('feature4Title'),
      description: t('feature4Desc'),
      icon: <CheckCircle className="h-6 w-6 text-accent" />,
    },
  ];

  return (
    <section id="product" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">{t('productTitle')}</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">{t('productDesc')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-hover">
              <div className="h-full bg-white rounded-2xl shadow-lg border border-border/40 p-8 relative">
                <div className="flex items-start space-x-4 mb-4">
                  {feature.icon}
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-foreground/80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 glass-card p-8 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-accent/20 blur-3xl"></div>
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Buroly Dashboard</h3>
                <p className="mb-6 text-foreground/80">
                  Our intuitive dashboard gives you a complete overview of your business operations,
                  with easy access to all the tools you need to manage your staff efficiently.
                </p>
                <a href="#contact" className="modern-button inline-flex items-center">
                  {t('heroCta')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              <div className="rounded-2xl bg-secondary/80 border border-border relative overflow-hidden aspect-video flex items-center justify-center shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-blue-500/5"></div>
                <span className="text-xl text-center px-6 relative z-10">
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
