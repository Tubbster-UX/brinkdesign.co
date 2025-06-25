"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white py-16"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="mb-8 text-gray-300">
          Let’s build something reliable, smart, and future-proof—together.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 focus-visible:outline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Get in Touch
        </Link>
      </div>
    </motion.section>
  );
}
