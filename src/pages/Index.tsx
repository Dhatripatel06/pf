import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";
import { useEffect } from "react";
import { profile } from "@/lib/data";

const Index = () => {
  useEffect(() => {
    document.title = `${profile.name} — Flutter Developer Portfolio`;
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", `${profile.name} — Flutter developer crafting beautiful, scalable mobile apps with Flutter, Dart, GetX & Firebase.`);
    if (!meta.parentElement) document.head.appendChild(meta);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
