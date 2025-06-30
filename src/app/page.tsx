import About from "@/components/about";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials-server";
import Services from "@/components/services";
import FeaturedProjectsServer from "@/components/FeaturedProjectsServer";

export default function Home() {
  return (
      <main>
        <Hero />
        <Services />
        <FeaturedProjectsServer />
        <About />
        <Testimonials />
      </main>
  );
}