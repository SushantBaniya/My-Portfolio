import { ExternalLink, Github, Folder } from "lucide-react";

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

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mb-10" />

          {/* Featured Projects */}
          <div className="space-y-8 mb-16">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="bg-card border border-border rounded-xl p-6 md:p-8 card-hover"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full aspect-[16/9] object-cover rounded-lg mb-4 border border-border bg-muted"
                    loading="lazy"
                  />
                )}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={22} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <h3 className="text-2xl font-bold mb-6 text-foreground">
            Other Noteworthy Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="bg-card border border-border rounded-xl p-6 card-hover flex flex-col"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full aspect-video object-cover rounded-md mb-4 border border-border bg-muted"
                    loading="lazy"
                  />
                )}
                <div className="flex items-start justify-between mb-4">
                  <Folder className="text-primary" size={28} />
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
