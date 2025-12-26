import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";
import photo from "../Assets/me.jpg";
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background glow effect */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-30"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 animate-fade-in-up">
            <div className="relative inline-block">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg shadow-primary/20">
                <img
                  src={photo}
                  alt="Sushant Baniya"
                  className="w-full h-full object-cover"

                />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-pulse" />
            </div>
          </div>

          <p className="text-primary font-mono text-sm mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Hi, my name is
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-foreground">Sushant Baniya</span>
          </h1>
          <h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            I build things for the web.
          </h2>
          <p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            A passionate full-stack developer specializing in{" "}
            <span className="text-primary">React</span>,{" "}
            <span className="text-primary">Next.js</span>, and currently
            exploring <span className="text-primary">Django</span>. I love
            creating beautiful, performant web applications.
          </p>

          <div
            className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="/resume.pdf" download="Sushant Baniya_Resume.pdf">
                <Download size={18} className="mr-2" />
                Download Resume
              </a>
            </Button>
          </div>

          <div
            className="flex gap-6 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="https://github.com/SushantBaniya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="www.linkedin.com/in/
sushant-baniya-4321a2343
"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your@email.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
