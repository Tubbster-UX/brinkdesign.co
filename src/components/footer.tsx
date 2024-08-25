import React from 'react';
import Logo from './logo';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className='flex items-center justify-center'>
                    <Logo className='w-32' />
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                    <ul>
                        <li className="mb-2"><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                        <li className="mb-2"><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
                        <li className="mb-2"><a href="/projects" className="text-gray-400 hover:text-white">Projects</a></li>
                        <li className="mb-2"><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                    <p className="text-gray-400">alexavierb@brinkdesign.co</p>
                    <p className="text-gray-400">Proudly based in South Dakota</p>
                </div>
            </div>
            <div className="text-center text-gray-400 mt-8">
                &copy; {new Date().getFullYear()} Brink Design. All rights reserved. <br />
                <span className="text-white">South Dakota | USA</span>
            </div>
        </footer>
    );
};

export default Footer;
