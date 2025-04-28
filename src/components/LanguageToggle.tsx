
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export const LanguageToggle = () => {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'fr' : 'zh');
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage}
      className="flex items-center space-x-2 font-mono text-sm"
    >
      <Languages size={16} />
      <span>{language === 'zh' ? 'FR' : 'ZH'}</span>
    </Button>
  );
};
