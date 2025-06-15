import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFoundPage() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-7xl font-bold mb-4 tracking-tight">404</h1>
            <p className="text-2xl mb-2">Page not found</p>
            <p className="text-lg text-gray-400 max-w-md mb-8">
                We couldn't find what you were looking for. But don't worry—great design is never far away.
            </p>

            <Link href="/" className="inline-flex items-center text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
            </Link>

            <div className="mt-12 text-sm text-gray-600">
                <span>Need help? </span>
                <a href="/contact" className="underline hover:text-white">Get in touch</a>
            </div>
        </div>
    )
}
