import Link from "next/link";
import { Button } from "./ui/button";

export default function About() {
    return (
        <div className='p-6 bg-gray-100 text-black' id='about'>
            <h1 className='text-4xl font-extrabold text-center mb-8'>About Me</h1>
            <section className="max-w-4xl mx-auto p-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">Who I Am</h2>
                    <p className="text-lg pl-4">As a solo designer and developer, I bring a personal touch to every project. With a passion for both creativity and technology, I’m dedicated to delivering solutions that reflect your unique vision.</p>
                </div>

                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">What I Do</h2>
                    <ul className="list-disc list-inside space-y-2 text-lg pl-4">
                        <li><strong>App Development:</strong> From initial concept to final product, I create apps that are user-friendly and efficient.</li>
                        <li><strong>Web Design & Development:</strong> I design and build websites with a focus on aesthetics and functionality, tailored to your needs.</li>
                        <li><strong>Customized Solutions:</strong> My approach is personalized to ensure that your specific goals are met with precision.</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">Why Work With Me</h2>
                    <ul className="list-disc list-inside space-y-2 text-lg pl-4">
                        <li><strong>Personalized Service:</strong> As the sole creator, I offer a direct and hands-on approach, ensuring your project gets the attention it deserves.</li>
                        <li><strong>Quality Design:</strong> I combine creativity and technical expertise to deliver high-quality solutions that stand out.</li>
                        <li><strong>Client-Focused:</strong> Your vision and goals are my priority. I work closely with you to make sure your expectations are exceeded.</li>
                    </ul>
                </div>

                <div className="text-center">
                    <Button asChild><Link href="/contact">Work With Me</Link></Button>
                </div>
            </section>
        </div>
    );
}
