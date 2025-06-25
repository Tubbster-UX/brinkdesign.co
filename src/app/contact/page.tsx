import { Metadata } from "next";
import ContactContainer from "@/components/contact_container";

export const metadata: Metadata = {
  title: "Contact Us - Brink Design Co.",
  description: "Reach out to Brink Design Co. for professional AV installation, networking, security systems, and low voltage services. Let’s get your project started!",
  alternates: { canonical: "https://www.brinkdesign.co/contact" },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Brink Design Co.",
    description: "Reach out to Brink Design Co. for professional AV installation, networking, security systems, and low voltage services. Let’s get your project started!",
    images: ["https://www.brinkdesign.co/og-image.jpg"],
  },
};

export default function ContactPage() {
    return (
        <div>
            <ContactContainer />
        </div>
    );
}