"use client";

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='relative flex flex-col justify-center items-center h-[45rem] bg-[url("/hero.avif")] bg-cover bg-center bg-fixed p-6 text-white'
        >
            <div className='absolute inset-0 bg-black/70'></div>
            <div className='relative z-10 text-center'>
                <h1 className='text-4xl font-extrabold mb-4'>Professional AV, Security & Low Voltage Installations</h1>
                <p className='text-lg mb-6'>
                    We specialize in clean, reliable installs for churches, homes, and businesses—cameras, cabling, audio systems, and smart tech done right.
                </p>
                <Button asChild>
                    <Link href="/contact">
                        Request a Free Quote
                    </Link>
                </Button>
            </div>
        </motion.section>
    );
}