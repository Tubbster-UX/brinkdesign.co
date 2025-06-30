import { Metadata } from "next";
import ContactContainer from "@/components/contact_container";

export const metadata: Metadata = {
  title: "Contact Brink Design Co. | Rapid City, SD",
  description: "Reach out for professional AV, networking, security, and low voltage services in Rapid City and across South Dakota.",
  alternates: { canonical: "https://www.brinkdesign.co/contact" },
  twitter: {
    card: "summary_large_image",
    title: "Contact Brink Design Co. | Rapid City, SD",
    description: "Reach out for professional AV, networking, security, and low voltage services in Rapid City and across South Dakota.",
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