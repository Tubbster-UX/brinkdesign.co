import { Metadata } from "next";
import ContactContainer from "@/components/contact_container";

export const metadata: Metadata = {
    title: "Contact Us - Brink Design Co.",
    description: "Get in touch with Brink Design Co. for web design, logo design, and app development services. Contact us today to start your project!",
};

export default function ContactPage() {
    return (
        <div>
            <div className='bg-[url("/hero.avif")] bg-cover bg-center bg-fixed h-96 py-10'>
                <div className="container flex flex-col justify-end items-start h-full">
                    <h1 className="text-3xl font-bold text-white">Contact</h1>
                </div>
            </div>

            <ContactContainer />
        </div>
    );
}