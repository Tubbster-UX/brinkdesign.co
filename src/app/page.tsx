import About from "@/components/about";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials-server";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Testimonials />
    </main>
  );
}