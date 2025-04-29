
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useState } from "react";

export const LanguageToggle = () => {
  const { language, setLanguage } = useTranslation();
  const [isRotating, setIsRotating] = useState(false);

  const toggleLanguage = () => {
    setIsRotating(true);
    setLanguage(language === 'zh' ? 'fr' : 'zh');
    
    // Reset rotation after animation completes
    setTimeout(() => {
      setIsRotating(false);
    }, 500);
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage}
      className="flex items-center space-x-2 text-sm rounded-full hover:bg-accent/10"
    >
      <Languages 
        size={16} 
        className={`transition-transform duration-500 ${isRotating ? 'rotate-180' : ''}`} 
      />
      <span className="transition-opacity duration-300">
        {language === 'zh' ? 'FR' : 'ZH'}
      </span>
    </Button>
  );
};
