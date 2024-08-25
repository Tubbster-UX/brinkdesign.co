import { Metadata } from "next";
import ContactContainer from "@/components/contact_container";

export const metadata: Metadata = {
    title: "Contact Us - Brink Design Co.",
    description: "Get in touch with Brink Design Co. for web design, logo design, and app development services. Contact us today to start your project!",
};

export default function ContactPage() {
    return (
        <div>
            <ContactContainer />
        </div>
    );
}