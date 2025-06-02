import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className='relative flex flex-col justify-center items-center h-[45rem] bg-[url("/hero.avif")] bg-cover bg-center bg-fixed p-6 text-white'>
            <div className='absolute inset-0 bg-black opacity-60'></div>
            <div className='relative z-10 text-center'>
                <h1 className='text-4xl font-extrabold mb-4'>Expert Low Voltage Installation Services</h1>
                <p className='text-lg mb-6'>
                    Professional solutions for security systems, network cabling, audio/video, and more. Reliable, safe, and tailored to your needs.
                </p>
                <Button asChild>
                    <Link href="/contact">
                        Request a Quote
                    </Link>
                </Button>
            </div>
        </div>
    );
}