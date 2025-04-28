
import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

// Translations
export const translations = {
  en: {
    // Navigation
    home: "Home",
    product: "Product",
    services: "Services",
    about: "About",
    contact: "Contact",
    
    // Hero
    heroTitle: "Staff Management Made Simple",
    heroSubtitle: "The complete solution for French entrepreneurs to manage staff, accounts, taxes and HR.",
    heroCta: "Get Started",
    learnMore: "Learn More",
    
    // Product
    productTitle: "One Platform, Multiple Solutions",
    productDesc: "StaffCompass combines powerful tools to simplify your business operations.",
    feature1Title: "Accounting",
    feature1Desc: "Automate bookkeeping and financial reporting with precision.",
    feature2Title: "Tax Management",
    feature2Desc: "Stay compliant with French tax regulations effortlessly.",
    feature3Title: "HR Management",
    feature3Desc: "Handle contracts, leave, and employee documentation with ease.",
    feature4Title: "Payroll",
    feature4Desc: "Process accurate payroll calculations and payments on schedule.",
    
    // Services
    servicesTitle: "Our Services",
    servicesDesc: "We provide everything French entrepreneurs need to manage their staff efficiently.",
    service1Title: "Setup & Onboarding",
    service1Desc: "Get your team set up with personalized onboarding support.",
    service2Title: "Ongoing Support",
    service2Desc: "Access to specialists for any questions or issues that arise.",
    service3Title: "Custom Implementation",
    service3Desc: "Tailored solutions to match your specific business needs.",
    
    // About
    aboutTitle: "About StaffCompass",
    aboutDesc: "Created by entrepreneurs for entrepreneurs, StaffCompass understands the unique challenges of French businesses.",
    aboutContent: "Founded in 2023, we've helped hundreds of French businesses streamline their operations and focus on growth. Our team combines expertise in French business regulations, HR management, and technology to deliver a solution that truly works for you.",
    team: "Our Team",
    
    // Contact
    contactTitle: "Get In Touch",
    contactDesc: "Have questions? We're here to help.",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    submitButton: "Send Message",
    contactInfo: "Contact Information",
    address: "123 Rue de Rivoli, Paris, France",
    phone: "+33 1 23 45 67 89",
    emailAddress: "contact@staffcompass.com",
    
    // Footer
    copyright: "© 2025 StaffCompass. All rights reserved.",
    termsLink: "Terms of Service",
    privacyLink: "Privacy Policy",
  },
  fr: {
    // Navigation
    home: "Accueil",
    product: "Produit",
    services: "Services",
    about: "À propos",
    contact: "Contact",
    
    // Hero
    heroTitle: "Gestion du Personnel Simplifiée",
    heroSubtitle: "La solution complète pour les entrepreneurs français pour gérer le personnel, la comptabilité, les impôts et les RH.",
    heroCta: "Commencer",
    learnMore: "En savoir plus",
    
    // Product
    productTitle: "Une Plateforme, Plusieurs Solutions",
    productDesc: "StaffCompass combine des outils puissants pour simplifier vos opérations commerciales.",
    feature1Title: "Comptabilité",
    feature1Desc: "Automatisez la tenue des comptes et les rapports financiers avec précision.",
    feature2Title: "Gestion Fiscale",
    feature2Desc: "Restez conforme aux réglementations fiscales françaises sans effort.",
    feature3Title: "Gestion RH",
    feature3Desc: "Gérez les contrats, les congés et la documentation des employés en toute simplicité.",
    feature4Title: "Paie",
    feature4Desc: "Traitez des calculs de paie précis et des paiements selon le calendrier prévu.",
    
    // Services
    servicesTitle: "Nos Services",
    servicesDesc: "Nous fournissons tout ce dont les entrepreneurs français ont besoin pour gérer efficacement leur personnel.",
    service1Title: "Configuration & Intégration",
    service1Desc: "Configurez votre équipe avec une assistance d'intégration personnalisée.",
    service2Title: "Support Continu",
    service2Desc: "Accès à des spécialistes pour toutes questions ou problèmes qui surviennent.",
    service3Title: "Implémentation Personnalisée",
    service3Desc: "Solutions sur mesure pour répondre à vos besoins commerciaux spécifiques.",
    
    // About
    aboutTitle: "À propos de StaffCompass",
    aboutDesc: "Créé par des entrepreneurs pour des entrepreneurs, StaffCompass comprend les défis uniques des entreprises françaises.",
    aboutContent: "Fondée en 2023, nous avons aidé des centaines d'entreprises françaises à rationaliser leurs opérations et à se concentrer sur la croissance. Notre équipe combine une expertise dans les réglementations commerciales françaises, la gestion des RH et la technologie pour fournir une solution qui fonctionne vraiment pour vous.",
    team: "Notre Équipe",
    
    // Contact
    contactTitle: "Contactez-nous",
    contactDesc: "Des questions ? Nous sommes là pour vous aider.",
    nameLabel: "Nom",
    emailLabel: "Email",
    messageLabel: "Message",
    submitButton: "Envoyer le message",
    contactInfo: "Informations de Contact",
    address: "123 Rue de Rivoli, Paris, France",
    phone: "+33 1 23 45 67 89",
    emailAddress: "contact@staffcompass.com",
    
    // Footer
    copyright: "© 2025 StaffCompass. Tous droits réservés.",
    termsLink: "Conditions d'utilisation",
    privacyLink: "Politique de confidentialité",
  }
};

type LanguageType = 'en' | 'fr';
type TranslationsType = typeof translations.en;

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: keyof TranslationsType) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguageType>('fr');

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as LanguageType | null;
    if (savedLang && (savedLang === 'en' || savedLang === 'fr')) {
      setLanguage(savedLang);
    }
  }, []);

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: keyof TranslationsType): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
