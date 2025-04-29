import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5 z-0"></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-accent/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-[10%] w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text">{t('heroTitle')}</span>
            </h1>
            <p className="text-lg md:text-xl max-w-lg text-foreground/80">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="modern-button">
                {t('heroCta')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#product" 
                className="modern-button-outline"
              >
                {t('learnMore')}
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="relative z-10">
              <div className="aspect-square relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-accent/50 to-blue-500/50">
                <div className="absolute inset-0 backdrop-blur-sm p-8">
                  <div className="w-full h-full relative bg-white/10 rounded-xl border border-white/20 flex items-center justify-center">
                    <div className="absolute top-8 left-8 w-16 h-16 bg-white/30 backdrop-blur-md rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 rounded-md bg-accent"></div>
                    </div>
                    <div className="absolute bottom-12 right-12 w-24 h-24 bg-accent/90 backdrop-blur-md rounded-full"></div>
                    <div className="w-32 h-32 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center">
                      <span className="font-bold text-white text-3xl">Buroly</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 glass-card p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-bold text-2xl">2023</div>
                  <div className="text-sm text-foreground/70">Launched</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </section>
  );
};
