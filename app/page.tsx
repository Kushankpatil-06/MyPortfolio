import Image from "next/image";
import Hero from "../components/Hero";
import { FloatingNav } from "../components/ui/Navbar";
import { House } from "lucide-react";
import Grid from "../components/Grid";
import Projects from "../components/Projects";
import { navItems } from "../data/index";
import Experience from "../components/Experience";
import Approach from "../components/Approach";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex bg-black relative flex-col  items-center justify-center px-12 mx-auto overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Approach />

        <Projects />

        <Experience />
        <Footer />
      </div>
    </div>
  );
}
