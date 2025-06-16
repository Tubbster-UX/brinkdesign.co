'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden">
      {/* Animated Blueprint Grid */}
      <div className="absolute inset-0 opacity-5 bg-[url('/grid.svg')] bg-cover animate-pulse-slow pointer-events-none" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="z-10 max-w-md w-full text-center"
      >
        <h1 className="text-7xl font-bold tracking-tight text-primary drop-shadow-lg">404</h1>
        <p className="mt-4 text-2xl font-medium text-primary/75">
          This page doesn’t exist.
        </p>
        <p className="mt-2 text-base text-gray-500">
          Either it moved, or you found a broken link. But hey — let’s get you back on track.
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-2xl border border-white px-5 py-2 text-sm font-medium hover:bg-white hover:text-black transition duration-300 shadow-md"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Return to Home
        </Link>

        <div className="mt-12 text-xs text-gray-600">
          <span>Need help? </span>
          <Link href="/contact" className="underline hover:text-primary">
            Get in touch
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
