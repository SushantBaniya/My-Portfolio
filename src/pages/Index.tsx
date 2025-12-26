import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Photos from "@/components/Photos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sushant Baniya | Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Full-stack developer specializing in React, Next.js, and Django. View my projects and get in touch for collaboration."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Photos />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
