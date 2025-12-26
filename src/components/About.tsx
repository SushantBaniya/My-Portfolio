import { Code2, Rocket, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mb-10" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Hello! I'm a passionate developer who loves building digital
                experiences. My journey in web development started with
                curiosity and has evolved into a deep love for creating
                intuitive, performant applications.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Currently, I specialize in front-end development with{" "}
                <span className="text-primary font-medium">React</span> and{" "}
                <span className="text-primary font-medium">Next.js</span>, while
                expanding my backend skills with{" "}
                <span className="text-primary font-medium">Django</span> and
                Python.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source, or learning something new.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl border border-border card-hover">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Code2 size={24} />
                  </div>
                  <h3 className="text-lg font-semibold">Clean Code</h3>
                </div>
                <p className="text-muted-foreground">
                  Writing maintainable, scalable code that stands the test of
                  time.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border card-hover">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Rocket size={24} />
                  </div>
                  <h3 className="text-lg font-semibold">Performance First</h3>
                </div>
                <p className="text-muted-foreground">
                  Building fast, optimized applications that users love.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border card-hover">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Lightbulb size={24} />
                  </div>
                  <h3 className="text-lg font-semibold">Always Learning</h3>
                </div>
                <p className="text-muted-foreground">
                  Continuously exploring new technologies and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
