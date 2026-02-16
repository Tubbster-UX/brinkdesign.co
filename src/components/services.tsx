"use client";

import { Network, Shield, Speaker, Home, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Shield,
    title: 'Security Cameras',
    description: 'See your property from anywhere with local recording and clear footage.',
    features: ['No Monthly Fees', '4K Cameras', 'Remote Access'],
    href: '/commercial-security-cameras-rapid-city',
  },
  {
    icon: Network,
    title: 'WiFi & Cabling',
    description: 'Reliable coverage, structured cabling, and cleaner installs that scale.',
    features: ['Business WiFi', 'Structured Cabling', 'Dead Zone Fixes'],
    href: '/business-wifi-networks-rapid-city',
  },
  {
    icon: Speaker,
    title: 'Church AV',
    description: 'Sound, video, and livestream systems your team can run confidently.',
    features: ['Sanctuary Audio', 'Livestreaming', 'Volunteer Training'],
    href: '/church-av-installation-south-dakota',
  },
  {
    icon: Home,
    title: 'Smart Home',
    description: 'Lighting, climate, shades, and audio controlled from one simple app.',
    features: ['Lighting Control', 'Motorized Shades', 'App + Voice Control'],
    href: '/smart-home-automation-black-hills',
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Install</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Practical low-voltage systems installed by a local team that answers the phone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group block h-full">
              <div className="h-full rounded-xl border border-gray-200 bg-white p-6 transition-colors hover:border-gray-300">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 text-gray-700">
                  <service.icon className="h-5 w-5" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.description}</p>

                <div className="space-y-2 mb-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center text-sm font-medium text-primary">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-6 md:p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Not Sure Where to Start?</h3>
          <p className="text-gray-600 mb-5 max-w-2xl mx-auto">
            Tell us what you want to improve and we&rsquo;ll recommend a clear plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Book a Site Visit & Quote
            </Link>
            <Link
              href="tel:6053893261"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-white transition-colors"
            >
              Call (605) 389-3261
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
