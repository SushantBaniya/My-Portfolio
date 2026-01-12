import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import photo from "../Assets/me.jpg";
import TypewriterText from "./TypewriterText";
import MagneticButton from "./MagneticButton";
import GlitchText from "./GlitchText";

const Hero = () => {
  const roles = [
    "Full-Stack Developer",
    "React Enthusiast",
    "Django Explorer",
    "UI/UX Lover",
    "Problem Solver",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl animate-pulse-slow bg-primary" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full opacity-15 blur-3xl animate-pulse-slow bg-cyan-500" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl animate-spin-slow bg-gradient-to-r from-primary to-cyan-500" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo with animated ring */}
          <div className="mb-8 animate-fade-in-up">
            <div className="relative inline-block group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-cyan-500 to-primary rounded-full opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" />
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src={photo}
                  alt="Sushant Baniya"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Status indicator */}
              <div className="absolute bottom-2 right-2 flex items-center gap-2 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/30">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-primary font-mono">Available</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <p className="text-primary font-mono text-sm tracking-wider">
              WELCOME TO MY WORLD
            </p>
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-foreground">I'm </span>
            <h1 className="text-5xl font-bold text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
      Sushant Baniya
    </h1>
          </h1>

          <h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6 animate-fade-in-up h-[1.2em]"
            style={{ animationDelay: "0.3s" }}
          >
            <TypewriterText
              texts={roles}
              typingSpeed={80}
              deletingSpeed={40}
              pauseDuration={2500}
            />
          </h2>

          <p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "0.4s" }}
          >
            Crafting <span className="text-primary font-semibold">pixel-perfect</span> experiences with
            {" "}<span className="relative inline-block">
              <span className="text-primary">React</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50 rounded-full" />
            </span>,{" "}
            <span className="relative inline-block">
              <span className="text-primary">Next.js</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50 rounded-full" />
            </span>, and exploring the realms of{" "}
            <span className="relative inline-block">
              <span className="text-primary">Django</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50 rounded-full" />
            </span>.
          </p>

          <div
            className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <MagneticButton strength={0.2}>
              <Button variant="hero" size="lg" className="group relative overflow-hidden" asChild>
                <a href="#projects">
                  <span className="relative z-10">View My Work</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Button variant="hero-outline" size="lg" className="group" asChild>
                <a href="#contact">
                  <span className="group-hover:text-primary transition-colors">Get In Touch</span>
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Button variant="hero-outline" size="lg" className="group" asChild>
                <a href="/resume.pdf" download="Sushant Baniya_Resume.pdf">
                  <Download size={18} className="mr-2 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
            </MagneticButton>
          </div>

          <div
            className="flex gap-6 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <MagneticButton strength={0.4}>
              <a
                href="https://github.com/SushantBaniya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
            </MagneticButton>
            <MagneticButton strength={0.4}>
              <a
                href="https://www.linkedin.com/in/sushant-baniya-4321a2343"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
            </MagneticButton>
            <MagneticButton strength={0.4}>
              <a
                href="mailto:sushantbaniya78@gmail.com"
                className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs font-mono tracking-wider opacity-70 group-hover:opacity-100">SCROLL DOWN</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-current rounded-full animate-scroll-down" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
