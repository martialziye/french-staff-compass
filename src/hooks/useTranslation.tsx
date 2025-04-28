
import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

// Translations
export const translations = {
  zh: {
    // Navigation
    home: "首页",
    product: "产品",
    services: "服务",
    about: "关于",
    contact: "联系",
    
    // Hero
    heroTitle: "简化员工管理",
    heroSubtitle: "为法国企业家提供的完整解决方案，用于管理员工、账户、税务和人力资源。",
    heroCta: "开始使用",
    learnMore: "了解更多",
    
    // Product
    productTitle: "一个平台，多种解决方案",
    productDesc: "StaffCompass 结合强大的工具，简化您的业务运营。",
    feature1Title: "会计",
    feature1Desc: "精确地自动化簿记和财务报告。",
    feature2Title: "税务管理",
    feature2Desc: "轻松遵守法国税务法规。",
    feature3Title: "人力资源管理",
    feature3Desc: "轻松处理合同、休假和员工文档。",
    feature4Title: "工资管理",
    feature4Desc: "按计划进行准确的工资计算和支付。",
    
    // Services
    servicesTitle: "我们的服务",
    servicesDesc: "我们提供法国企业家高效管理员工所需的一切。",
    service1Title: "设置与入职",
    service1Desc: "通过个性化的入职支持为您的团队提供服务。",
    service2Title: "持续支持",
    service2Desc: "获得专家支持，解答任何问题或解决出现的问题。",
    service3Title: "定制实施",
    service3Desc: "量身定制的解决方案，满足您的特定业务需求。",
    
    // About
    aboutTitle: "关于 StaffCompass",
    aboutDesc: "由企业家为企业家创建，StaffCompass 了解法国企业的独特挑战。",
    aboutContent: "成立于2023年，我们已帮助数百家法国企业精简运营并专注于增长。我们的团队结合了法国商业法规、人力资源管理和技术方面的专业知识，为您提供真正有效的解决方案。",
    team: "我们的团队",
    
    // Contact
    contactTitle: "联系我们",
    contactDesc: "有问题？我们随时为您提供帮助。",
    nameLabel: "姓名",
    emailLabel: "电子邮件",
    messageLabel: "留言",
    submitButton: "发送留言",
    contactInfo: "联系信息",
    address: "法国巴黎里沃利大街123号",
    phone: "+33 1 23 45 67 89",
    emailAddress: "contact@staffcompass.com",
    
    // Footer
    copyright: "© 2025 StaffCompass 版权所有。",
    termsLink: "服务条款",
    privacyLink: "隐私政策",
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

type LanguageType = 'zh' | 'fr';
type TranslationsType = typeof translations.zh;

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
    if (savedLang && (savedLang === 'zh' || savedLang === 'fr')) {
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
