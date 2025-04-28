
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export const LanguageToggle = () => {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage}
      className="flex items-center space-x-2 font-mono text-sm"
    >
      <Globe size={16} />
      <span>{language === 'en' ? 'FR' : 'EN'}</span>
    </Button>
  );
};
