import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import MagneticButton from "./MagneticButton";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/5"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <MagneticButton strength={0.2}>
            <a href="#" className="text-xl font-bold text-gradient flex items-center gap-2 group">
              <Sparkles className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <span>&lt;Sushant /&gt;</span>
            </a>
          </MagneticButton>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <MagneticButton key={link.name} strength={0.15}>
                <a
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${activeSection === link.href.replace('#', '')
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  {link.name}
                  {activeSection === link.href.replace('#', '') && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </a>
              </MagneticButton>
            ))}
            <MagneticButton strength={0.2}>
              <Button variant="hero" size="sm" className="ml-4 group" asChild>
                <a href="#contact" className="flex items-center gap-2">
                  <span>Let's Talk</span>
                  <span className="group-hover:rotate-12 transition-transform">👋</span>
                </a>
              </Button>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 hover:bg-secondary/50 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="py-4 border-t border-border space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-200 ${activeSection === link.href.replace('#', '') ? 'text-primary bg-primary/5' : ''
                  }`}
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <Button variant="hero" size="sm" className="w-full" asChild>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Let's Talk 👋
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
