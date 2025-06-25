import { Network, Shield, Speaker, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Network,
    title: 'Network & Cabling',
    description:
      'Structured wiring and robust WiFi solutions to keep your business, church, or home connected.',
  },
  {
    icon: Shield,
    title: 'Security Systems',
    description:
      'Camera surveillance and access control installed for peace of mind and easy monitoring.',
  },
  {
    icon: Speaker,
    title: 'Audio/Video Installs',
    description:
      'Professional sound reinforcement and display setups for clear messages and engaging events.',
  },
  {
    icon: Home,
    title: 'Smart Home & Automation',
    description:
      'Integrate lighting, climate, and more for an efficient, modern space that works for you.',
  },
];

export default function Services() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="text-center p-6 rounded-lg shadow-md bg-gray-50"
            >
              <Icon className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
