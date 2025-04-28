
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-mono font-bold leading-tight">
              {t('heroTitle')}
            </h1>
            <p className="text-lg md:text-xl max-w-lg">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bauhaus-button">
                {t('heroCta')}
              </a>
              <a 
                href="#product" 
                className="font-mono font-bold px-6 py-3 border-2 border-black bg-white text-black transition-all duration-200 hover:bg-black hover:text-white inline-block"
              >
                {t('learnMore')}
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-secondary bauhaus-border relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full h-full relative">
                  <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-accent"></div>
                  <div className="absolute bottom-0 right-0 w-1/3 h-1/3 rounded-full bg-black"></div>
                  <div className="absolute top-1/2 right-1/4 w-1/4 h-1/4 bg-white bauhaus-border"></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-2/3 h-1/2 bauhaus-border bg-white p-4">
              <div className="h-full w-full flex items-center justify-center">
                <span className="font-mono text-xl font-bold">StaffCompass</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a href="#product" className="scroll-indicator">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </section>
  );
};
