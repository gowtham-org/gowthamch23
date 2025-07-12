import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Navigation: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Skills", href: "#skills" },
      { name: "Experience", href: "#experience" },
      { name: "Contact", href: "#contact" }
    ],
    Services: [
      { name: "Machine Learning", href: "#services" },
      { name: "DevOps & Automation", href: "#services" },
      { name: "Data Analysis", href: "#services" },
      { name: "Cloud Solutions", href: "#services" }
    ],
    Contact: [
      { name: "gowthamchowdam2001@gmail.com", href: "mailto:gowthamchowdam2001@gmail.com" },
      { name: "+1 346-599-8350", href: "tel:+13465998350" },
      { name: "Houston, TX, USA", href: "#contact" }
    ]
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/gowtham-org",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/gowtham-chowdam-35ba96185",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:gowthamchowdam2001@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-gradient-hero text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-x-12 translate-y-12" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-2xl font-bold font-poppins mb-4">Gowtham Chowdam</h3>
                <p className="text-white/80 leading-relaxed">
                  Engineering Data Science graduate passionate about creating scalable 
                  solutions through machine learning and DevOps excellence.
                </p>
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold mb-6">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/20 py-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold mb-2">Stay Updated</h4>
              <p className="text-white/80">
                Get notified about my latest projects and insights in data science.
              </p>
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button className="bg-white text-primary hover:bg-white/90 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center text-white/80 text-sm">
              <span>© 2024 Gowtham Chowdam. Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-400 fill-current" />
              <span>and lots of coffee</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-white/80">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
            </div>

            {/* Back to Top */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-white/30 text-white bg-white/10 hover:bg-white/20 hover:border-white/50"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;