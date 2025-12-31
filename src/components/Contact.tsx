import { useState } from "react";
import { Mail, MapPin, Send, Sparkles, MessageCircle, Clock, Coffee } from "lucide-react";
import emailjs from "@emailjs/browser";

import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import TiltCard from "./TiltCard";
import MagneticButton from "./MagneticButton";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [sectionRef, isSectionVisible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: "Email not configured",
        description: "Add your EmailJS keys to .env to send messages.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_email: "sushantbaniya78@gmail.com",
        },
        {
          publicKey,
        }
      );

      toast({
        title: "Message sent! 🎉",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email send failed", error);
      toast({
        title: "Something went wrong",
        description: "Unable to send your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-card/30 relative overflow-hidden" ref={sectionRef}>
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      {/* Floating icons */}
      <div className="absolute top-20 left-10 text-4xl animate-float opacity-20">💬</div>
      <div className="absolute top-40 right-20 text-3xl animate-float opacity-20" style={{ animationDelay: '1s' }}>✨</div>
      <div className="absolute bottom-40 left-20 text-3xl animate-float opacity-20" style={{ animationDelay: '2s' }}>🚀</div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="text-primary" size={24} />
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-gradient">Get In Touch</span>
              </h2>
              <Sparkles className="text-primary" size={24} />
            </div>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mb-6 mx-auto" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm currently open to new opportunities and collaborations. Whether
              you have a project in mind or just want to say hi, feel free to
              reach out!
            </p>
          </div>

          <div className={`grid md:grid-cols-2 gap-12 transition-all duration-700 delay-200 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Contact Info */}
            <div className="space-y-6">
              <TiltCard tiltStrength={5} className="p-6 bg-card rounded-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-cyan-500 rounded-lg text-white shadow-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:sushantbaniya78@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      sushantbaniya78@gmail.com
                    </a>
                  </div>
                </div>
              </TiltCard>

              <TiltCard tiltStrength={5} className="p-6 bg-card rounded-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg text-white shadow-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">Kathmandu, Nepal 🇳🇵</p>
                  </div>
                </div>
              </TiltCard>

              <TiltCard tiltStrength={5} className="p-6 bg-card rounded-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg text-white shadow-lg">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
                    <p className="text-muted-foreground">Usually within 24 hours ⚡</p>
                  </div>
                </div>
              </TiltCard>

              <div className="p-6 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-xl border border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <Coffee className="text-primary" size={20} />
                  <h3 className="font-semibold text-foreground">Let's grab a virtual coffee!</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/SushantBaniya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm"
                  >
                    GitHub →
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sushant-baniya-4321a2343"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm"
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <TiltCard tiltStrength={3} className="bg-card p-8 rounded-2xl border border-border">
              <div className="flex items-center gap-2 mb-6">
                <MessageCircle className="text-primary" size={20} />
                <h3 className="font-semibold text-foreground">Send me a message</h3>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${focusedField === 'name' || formData.name
                        ? '-top-2 text-xs text-primary bg-card px-2'
                        : 'top-3 text-sm text-muted-foreground'
                      }`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${focusedField === 'email' || formData.email
                        ? '-top-2 text-xs text-primary bg-card px-2'
                        : 'top-3 text-sm text-muted-foreground'
                      }`}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${focusedField === 'message' || formData.message
                        ? '-top-2 text-xs text-primary bg-card px-2'
                        : 'top-3 text-sm text-muted-foreground'
                      }`}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  />
                </div>
                <MagneticButton strength={0.15} className="w-full">
                  <Button
                    variant="hero"
                    size="lg"
                    type="submit"
                    className="w-full group relative overflow-hidden"
                    disabled={isSubmitting}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </span>
                  </Button>
                </MagneticButton>
              </form>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
