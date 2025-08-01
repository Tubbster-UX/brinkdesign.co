import { Metadata } from "next";
import ContactContainer from "@/components/contact_container";

export const metadata: Metadata = {
  title: "Contact Brink Design – Western South Dakota Low Voltage Experts",
  description:
    "Get in touch with Brink Design for professional AV installation, security cameras and cabling services across western South Dakota, including Sturgis and Rapid City.",
  alternates: { canonical: "https://www.brinkdesign.co/contact" },
  openGraph: {
    title: "Contact Brink Design – Western South Dakota Low Voltage Experts",
    description:
      "Reach out for professional AV, networking and security solutions across western South Dakota.",
    images: ["https://www.brinkdesign.co/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Brink Design – Western South Dakota Low Voltage Experts",
    description:
      "Get in touch for AV, networking and security solutions in the Black Hills region.",
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