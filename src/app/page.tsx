import About from "@/components/about";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials-server";
import Services from "@/components/services";
import FeaturedProjects from "@/components/featured-projects";
import FinalCTA from "@/components/finalCTA";

export default function Home() {
  return (
      <main>
        <Hero />
        <Services />
        <FeaturedProjects />
        <About />
        <Testimonials />
        <FinalCTA />
      </main>
  );
}