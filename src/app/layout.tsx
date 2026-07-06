import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ConditionalLayout from "@/components/ConditionalLayout";
import { GoogleAnalytics } from "@next/third-parties/google";
import Analytics from "@/components/Analytics";
import { GA_ID } from "@/lib/analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.brinkdesign.co"),
  title:
    "Brink Design – Low Voltage AV Installer in Western South Dakota",
  description:
    "Professional low voltage wiring, AV design and security camera installations for churches, businesses and homes across western South Dakota.",
  robots: { index: true, follow: true },
  openGraph: {
    title:
      "Brink Design – Low Voltage AV Installer in Western South Dakota",
    description:
      "Professional low voltage wiring, AV design and security installations for churches, businesses and homes throughout western South Dakota.",
    url: "https://www.brinkdesign.co",
    type: "website",
    images: [
      {
        url: "https://www.brinkdesign.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brink Design Co. AV Services",
      },
    ],
  },
  alternates: { canonical: "https://www.brinkdesign.co" },
  twitter: {
    card: "summary_large_image",
    title:
      "Brink Design – Low Voltage AV Installer in Western South Dakota",
    description:
      "Professional AV and cabling solutions for homes and organizations across western South Dakota.",
    images: ["https://www.brinkdesign.co/og-image.jpg"],
  },
};


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link id="favicon" rel="icon" href="/favicon/favicon-light.png" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MDQGJJM8');`
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function setFavicon() {
                  const favicon = document.getElementById('favicon');
                  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    favicon.href = '/favicon/favicon-dark.png';
                  } else {
                    favicon.href = '/favicon/favicon-light.png';
                  }
                }
                setFavicon();
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setFavicon);
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Brink Design Co.",
              url: "https://www.brinkdesign.co",
              telephone: "605-389-3261",
              areaServed: [
                { "@type": "State", name: "South Dakota" },
                { "@type": "State", name: "Wyoming" },
                { "@type": "State", name: "Nebraska" },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Rapid City",
                addressRegion: "SD",
                addressCountry: "US",
              },
            }),
          }}
        />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MDQGJJM8" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
        <GoogleAnalytics gaId={GA_ID} />
        <Analytics />
      </body>
    </html>
  );
}