
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProductSection } from "@/components/ProductSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <ScrollAnimation>
        <HeroSection />
      </ScrollAnimation>
      
      <ScrollAnimation animation="fade-up" delay={100}>
        <ProductSection />
      </ScrollAnimation>
      
      <ScrollAnimation animation="fade-up" delay={100}>
        <ServicesSection />
      </ScrollAnimation>
      
      <ScrollAnimation animation="fade-up" delay={100}>
        <AboutSection />
      </ScrollAnimation>
      
      <ScrollAnimation animation="fade-up" delay={100}>
        <ContactSection />
      </ScrollAnimation>
      
      <Footer />
    </div>
  );
};

export default Index;
