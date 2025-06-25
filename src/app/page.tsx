import About from "@/components/about";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials-server";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="text-gray-900 px-6 py-12 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">AV Installation Services</h1>
        <p className="mb-8 text-lg">
          We design and install audio visual systems for churches, events, and commercial spaces.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Security Camera Installers</h2>
        <p className="mb-8">
          Dependable camera systems tailored for homes and businesses.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Low Voltage Wiring Experts</h2>
        <p>
          From network cabling to control wiring, we ensure clean and reliable installations.
        </p>
      </section>
      <About />
      <Testimonials />
    </main>
  );
}
