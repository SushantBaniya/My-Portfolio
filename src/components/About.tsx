import { Code2, Rocket, Lightbulb, Coffee, Zap, Heart } from "lucide-react";
import TiltCard from "./TiltCard";
import { useScrollReveal, useStaggerReveal } from "@/hooks/use-scroll-reveal";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { label: "Projects Completed", value: 15, suffix: "+" },
  { label: "Cups of Coffee", value: 847, suffix: "" },
  { label: "Lines of Code", value: 50, suffix: "K+" },
  { label: "Happy Clients", value: 10, suffix: "+" },
];

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
    color: "from-primary to-cyan-500",
  },
  {
    icon: Rocket,
    title: "Performance First",
    description: "Building fast, optimized applications that users love.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Lightbulb,
    title: "Always Learning",
    description: "Continuously exploring new technologies and best practices.",
    color: "from-amber-500 to-orange-500",
  },
];

const About = () => {
  const [sectionRef, isSectionVisible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });
  const [statsRef, isStatsVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const [cardsRef, isCardsVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const cardVisibility = useStaggerReveal(values.length, isCardsVisible, 150);

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className={`transition-all duration-700 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">About Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mb-10" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className={`space-y-6 transition-all duration-700 delay-200 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Hello! I'm a passionate developer who loves building digital
                experiences. My journey in web development started with
                curiosity and has evolved into a deep love for creating
                <span className="text-primary font-medium"> intuitive</span>,
                <span className="text-primary font-medium"> performant</span> applications.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Currently, I specialize in front-end development with{" "}
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/10 rounded-md text-primary font-medium">
                  <Zap size={14} /> React
                </span>{" "}
                and{" "}
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/10 rounded-md text-primary font-medium">
                  <Zap size={14} /> Next.js
                </span>, while
                expanding my backend skills with{" "}
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/10 rounded-md text-primary font-medium">
                  <Zap size={14} /> Django
                </span>{" "}
                and Python.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed flex items-start gap-2">
                <Coffee className="text-primary mt-1 flex-shrink-0" size={20} />
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source, or learning something new.
              </p>

              {/* Fun fact badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-full border border-primary/20">
                <Heart className="text-red-500 animate-pulse" size={16} />
                <span className="text-sm text-muted-foreground">
                  Fun fact: I've mass deployed my first website while sleeping! 😴
                </span>
              </div>
            </div>

            <div className="space-y-4" ref={cardsRef}>
              {values.map((item, index) => (
                <div
                  key={item.title}
                  className={`transition-all duration-500 ${cardVisibility[index]
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-10'
                    }`}
                >
                  <TiltCard className="bg-card p-6 rounded-xl border border-border">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                        <item.icon size={24} />
                      </div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground pl-[52px]">
                      {item.description}
                    </p>
                  </TiltCard>
                </div>
              ))}
            </div>
          </div>

          {/* Stats section */}
          <div
            ref={statsRef}
            className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-300 ${isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            {stats.map((stat, index) => (
              <TiltCard
                key={stat.label}
                tiltStrength={5}
                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    isVisible={isStatsVisible}
                    duration={2000 + index * 200}
                  />
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
