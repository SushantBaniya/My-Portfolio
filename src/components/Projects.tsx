import { ExternalLink, Github, Folder, ArrowUpRight, Sparkles } from "lucide-react";
import TiltCard from "./TiltCard";
import { useScrollReveal, useStaggerReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";

const projects = [
  {
    title: "Simple E-Commerce",
    description:
      "A streamlined storefront with product browsing, cart, and checkout flows, focused on fast performance and clean UI.",
    tags: ["React", "Vite", "Stripe", "Tailwind CSS"],
    github: "https://github.com/yourusername/simple-ecommerce",
    live: "https://example.com",
    featured: true,
    image: "/simple-ecommerce.svg",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team features.",
    tags: ["React", "Firebase", "TypeScript", "DnD Kit"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    image: "/task-app.svg",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects and skills with smooth animations.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    image: "/portfolio.svg",
  },
  {
    title: "Blog Platform",
    description:
      "A blogging platform with markdown support, user authentication, and comment system.",
    tags: ["Django", "Python", "PostgreSQL", "React"],
    github: "https://github.com",
    featured: false,
    image: "/blog.svg",
  },
  {
    title: "Recipe Finder",
    description:
      "An app to discover and save recipes based on available ingredients.",
    tags: ["React", "Spoonacular API", "LocalStorage"],
    github: "https://github.com",
    featured: false,
    image: "/recipe.svg",
  },
];

const FeaturedProject = ({ project, index, isVisible }: { project: typeof projects[0]; index: number; isVisible: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TiltCard
        className="bg-card border border-border rounded-2xl overflow-hidden"
        tiltStrength={5}
      >
        {/* Gradient accent bar */}
        <div className={`h-1 bg-gradient-to-r ${project.gradient || 'from-primary to-cyan-500'}`} />

        <div className="p-6 md:p-8">
          {/* Project number badge */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
              Featured Project #{String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Github size={18} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Image container with overlay */}
          {project.image && (
            <div className="relative rounded-xl overflow-hidden mb-6 group">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent transition-opacity duration-300 flex items-end justify-center pb-6 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <a
                  href={project.live || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:scale-105 transition-transform"
                >
                  View Project <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          )}

          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </TiltCard>
    </div>
  );
};

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const [sectionRef, isSectionVisible] = useScrollReveal<HTMLElement>({ threshold: 0.05 });
  const [otherRef, isOtherVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const otherVisibility = useStaggerReveal(otherProjects.length, isOtherVisible, 100);

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className={`transition-all duration-700 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-primary" size={28} />
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-gradient">Featured Projects</span>
              </h2>
            </div>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mb-4" />
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Here are some of my favorite projects. Each one taught me something new and pushed my skills further.
            </p>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {featuredProjects.map((project, index) => (
              <FeaturedProject
                key={project.title}
                project={project}
                index={index}
                isVisible={isSectionVisible}
              />
            ))}
          </div>

          {/* Other Projects */}
          <div ref={otherRef}>
            <h3 className={`text-2xl font-bold mb-6 text-foreground flex items-center gap-2 transition-all duration-700 ${isOtherVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Folder className="text-primary" size={24} />
              Other Noteworthy Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={`transition-all duration-500 ${otherVisibility[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <TiltCard
                    className="h-full bg-card border border-border rounded-xl p-6 flex flex-col group"
                    tiltStrength={8}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                        <Folder size={24} />
                      </div>
                      <div className="flex gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github size={18} />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </TiltCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
