"use client";

import { Network, Shield, Speaker, Home, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    icon: Network,
    title: 'Network & Cabling',
    description: 'Structured wiring and robust WiFi solutions to keep your business, church, or home connected with enterprise-grade performance.',
    features: ['Structured Cabling', 'WiFi Solutions', 'Fiber Optic Installation', 'Network Security'],
    href: '/services/low-voltage',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600'
  },
  {
    icon: Shield,
    title: 'Security Systems',
    description: 'Camera surveillance and access control installed for peace of mind and easy monitoring with 24/7 remote access.',
    features: ['IP Cameras', 'Access Control', 'Motion Sensors', 'Remote Monitoring'],
    href: '/services/security-cameras',
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-50',
    textColor: 'text-red-600'
  },
  {
    icon: Speaker,
    title: 'Audio/Video Systems',
    description: 'Professional sound reinforcement and display setups for clear messages and engaging events that captivate your audience.',
    features: ['Sound Systems', 'Projection Setup', 'Livestream Solutions', 'Digital Signage'],
    href: '/services/commercial-av',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600'
  },
  {
    icon: Home,
    title: 'Smart Home & Automation',
    description: 'Integrate lighting, climate, and more for an efficient, modern space that works seamlessly with your lifestyle.',
    features: ['Lighting Control', 'Climate Automation', 'Smart Locks', 'Voice Integration'],
    href: '/contact',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600'
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we deliver professional-grade installations 
            that enhance your space and simplify your technology needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={service.href} className="group block h-full">
                <div className="h-full bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group-hover:border-gray-200">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team will assess your space and recommend the perfect technology solutions 
              to meet your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="tel:6053818290"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 rounded-xl transition-all duration-300"
              >
                Call (605) 381-8290
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
