import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ConditionalLayout from "@/components/ConditionalLayout";

export const metadata: Metadata = {
  title: "Brink Design Co. - Innovative Web Solutions",
  description: "Explore top-tier web design, logo design, and app development services with Brink Design Co.",
  openGraph: {
    title: "Brink Design Co. - Innovative Web Solutions",
    description: "Explore top-tier web design, logo design, and app development services with Brink Design Co.",
    url: "https://www.brinkdesign.co",
    type: "website",
    images: [
      {
        url: "https://www.brinkdesign.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brink Design Co. Logo",
      },
    ],
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
        <link id="favicon" rel="icon" href="/favicon/favicon-light.png" />
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
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}