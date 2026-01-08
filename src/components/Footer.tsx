import { Github, Linkedin, Mail, Heart, Coffee, ArrowUp } from "lucide-react";
import MagneticButton from "./MagneticButton";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Back to top button */}
        <div className="flex justify-center mb-8">
          <MagneticButton strength={0.3}>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
              aria-label="Back to top"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </MagneticButton>
        </div>

        {/* Main footer content */}
        <div className="flex flex-col items-center gap-8">
          {/* Logo/Name */}
          <a href="#" className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity">
            &lt;Sushant /&gt;
          </a>

          {/* Social links */}
          <div className="flex gap-4">
            <MagneticButton strength={0.4}>
              <a
                href="https://github.com/SushantBaniya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Github size={20} />
              </a>
            </MagneticButton>
            <MagneticButton strength={0.4}>
              <a
                href="https://www.linkedin.com/in/sushant-baniya-4321a2343"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </MagneticButton>
            <MagneticButton strength={0.4}>
              <a
                href="mailto:sushantbaniya78@gmail.com"
                className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </MagneticButton>
          </div>

          {/* Credits */}
          <div className="text-center space-y-2">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2 flex-wrap">
              Designed & Built with lots of
              <Coffee size={14} className="text-amber-500" />
              by
              <span className="text-foreground font-medium">Sushant Baniya</span>
            </p>
            <p className="text-muted-foreground/60 text-xs">
              © {new Date().getFullYear()} All rights reserved. Made in Nepal 🇳🇵
            </p>
          </div>

          {/* Fun easter egg hint */}
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
