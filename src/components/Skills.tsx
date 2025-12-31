import { useScrollReveal, useStaggerReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";

const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "React", level: 90, color: "from-cyan-400 to-blue-500" },
      { name: "Next.js", level: 85, color: "from-gray-400 to-gray-600" },
      { name: "TypeScript", level: 80, color: "from-blue-400 to-blue-600" },
      { name: "Tailwind CSS", level: 90, color: "from-teal-400 to-cyan-500" },
      { name: "HTML/CSS", level: 95, color: "from-orange-400 to-red-500" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "Django", level: 50, color: "from-green-500 to-emerald-600" },
      { name: "Python", level: 55, color: "from-yellow-400 to-yellow-600" },
      { name: "Node.js", level: 60, color: "from-green-400 to-green-600" },
      { name: "REST APIs", level: 75, color: "from-purple-400 to-purple-600" },
      { name: "PostgreSQL", level: 65, color: "from-blue-500 to-indigo-600" },
    ],
  },
  {
    category: "Tools & Other",
    icon: "🛠️",
    items: [
      { name: "Git", level: 85, color: "from-orange-500 to-red-600" },
      { name: "VS Code", level: 90, color: "from-blue-500 to-blue-700" },
      { name: "Figma", level: 70, color: "from-pink-400 to-purple-500" },
      { name: "Docker", level: 55, color: "from-blue-400 to-cyan-500" },
      { name: "Linux", level: 65, color: "from-yellow-500 to-orange-500" },
    ],
  },
];

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  isVisible: boolean;
  delay: number;
}

const SkillBar = ({ name, level, color, isVisible, delay }: SkillBarProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between mb-2">
        <span className="text-muted-foreground text-sm font-medium group-hover:text-foreground transition-colors">
          {name}
        </span>
        <span
          className={`text-sm font-mono transition-all duration-300 ${isHovered ? 'text-white scale-110' : 'text-primary'
            }`}
        >
          {level}%
        </span>
      </div>
      <div className="h-3 bg-secondary rounded-full overflow-hidden relative">
        {/* Background shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />

        {/* Progress bar */}
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out relative overflow-hidden`}
          style={{
            width: isVisible ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shine" />

          {/* Glow on hover */}
          <div
            className={`absolute inset-0 bg-white/20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
              }`}
          />
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [sectionRef, isSectionVisible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });
  const categoryVisibility = useStaggerReveal(skills.length, isSectionVisible, 200);

  return (
    <section id="skills" className="py-24 bg-card/30 relative overflow-hidden" ref={sectionRef}>
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className={`transition-all duration-700 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Skills & Technologies</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mb-4" />
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Here's a snapshot of my technical toolkit. I'm always learning and adding new skills to my arsenal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <div
                key={skillGroup.category}
                className={`bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border transition-all duration-700 ${categoryVisibility[groupIndex]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                  }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{skillGroup.icon}</span>
                  <h3 className="text-xl font-semibold text-foreground">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="space-y-5">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={skill.color}
                      isVisible={categoryVisibility[groupIndex]}
                      delay={skillIndex * 100}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skill tags cloud */}
          <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-muted-foreground mb-4">Other technologies I've worked with:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Redux', 'GraphQL', 'MongoDB', 'Firebase', 'Sass', 'Jest', 'Webpack', 'Vite', 'Vercel', 'AWS'].map((tech, index) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm bg-secondary/50 text-muted-foreground rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 cursor-default hover:scale-105"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
