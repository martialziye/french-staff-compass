
import { useTranslation } from "@/hooks/useTranslation";

export const Footer = () => {
  const { t } = useTranslation();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="font-mono font-bold text-2xl mb-4">StaffCompass</div>
            <p className="max-w-sm text-white/70">
              Simplifying staff management for French entrepreneurs since 2023.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono font-bold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-white transition-colors">{t('home')}</a></li>
              <li><a href="#product" className="text-white/70 hover:text-white transition-colors">{t('product')}</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">{t('services')}</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">{t('about')}</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">{t('contact')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">{t('termsLink')}</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">{t('privacyLink')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/20 text-center md:text-left text-white/70">
          <p>© {currentYear} StaffCompass. {t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};
