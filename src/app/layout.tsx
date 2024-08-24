import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Brink Design Co. - Innovative Web Solutions",
  description: "Explore top-tier web design, logo design, and app development services with Brink Design Co.",
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
        <link id="favicon" rel="icon" href="/favicon-light.png" />
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}