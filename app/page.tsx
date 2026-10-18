import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Tools from "@/components/Tools";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white flex flex-col selection:bg-indigo-600 selection:text-white">
      {/* Sticky Blurred Glass Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Skills Showcase */}
        <Skills />

        {/* 4. Projects & Case Studies */}
        <Projects />

        {/* 5. Services Section */}
        <Services />

        {/* 6. Tools Showcase */}
        <Tools />

        {/* 7. Experience & Learning Journey Timeline */}
        <Journey />

        {/* 8. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
