const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Django", level: 50 },
      { name: "Python", level: 55 },
      { name: "Node.js", level: 60 },
      { name: "REST APIs", level: 75 },
      { name: "PostgreSQL", level: 65 },
    ],
  },
  {
    category: "Tools & Other",
    items: [
      { name: "Git", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 70 },
      { name: "Docker", level: 55 },
      { name: "Linux", level: 65 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mb-10" />

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-xl font-semibold mb-6 text-foreground">
                  {skillGroup.category}
                </h3>
                <div className="space-y-4">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-muted-foreground text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-primary text-sm font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
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

export default Skills;
