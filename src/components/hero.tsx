import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className='relative flex flex-col justify-center items-center h-[45rem] bg-[url("/hero.avif")] bg-cover bg-center bg-fixed p-6 text-white'>
            <div className='absolute inset-0 bg-black opacity-30'></div> {/* Overlay for better text visibility */}
            <div className='relative z-10 text-center'>
                <h1 className='text-4xl font-extrabold mb-4'>Turning Ideas into Innovative Solutions</h1>
                <p className='text-lg mb-6'>Transform your digital presence with cutting-edge design and development tailored to your vision.</p>
                <Button asChild>
                    <Link href="/contact">
                    Contact Me
                    </Link>
                </Button>
            </div>
        </div>
    );
}
