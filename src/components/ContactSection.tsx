
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const ContactSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">{t('contactTitle')}</h2>
          <p className="text-lg">{t('contactDesc')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bauhaus-border bg-white p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-mono">
                  {t('nameLabel')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bauhaus-border bg-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-mono">
                  {t('emailLabel')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bauhaus-border bg-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-mono">
                  {t('messageLabel')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 bauhaus-border bg-transparent"
                ></textarea>
              </div>
              
              <div>
                <button type="submit" className="bauhaus-button">
                  {t('submitButton')}
                </button>
              </div>
            </form>
          </div>
          
          <div>
            <div className="bauhaus-border bg-secondary h-full p-8">
              <h3 className="text-2xl font-mono mb-6">{t('contactInfo')}</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 13L12 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 7L12.01 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <div>
                    <p className="font-mono font-bold">Address</p>
                    <p>{t('address')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M15.5 9.5L15.5 8.5C15.5 6.567 13.933 5 12 5V5C10.067 5 8.5 6.567 8.5 8.5L8.5 9.5" stroke="currentColor" strokeWidth="2"/>
                    <rect x="8.5" y="9.5" width="7" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="14" r="1" fill="currentColor"/>
                  </svg>
                  <div>
                    <p className="font-mono font-bold">Phone</p>
                    <p>{t('phone')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M2 7L9.50122 13.001C10.9621 14.1697 13.0379 14.1697 14.4988 13.001L22 7" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <div>
                    <p className="font-mono font-bold">Email</p>
                    <p>{t('emailAddress')}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bauhaus-border aspect-square"></div>
                  <div className="bauhaus-border aspect-square bg-accent"></div>
                  <div className="bauhaus-border aspect-square bg-black"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
