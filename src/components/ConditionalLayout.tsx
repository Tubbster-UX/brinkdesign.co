"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import StickyHeaderCTA from "@/components/stickyHeaderCTA";
import LogoCloud from "./logoCloud";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isKeystaticRoute = pathname.startsWith("/keystatic");

  return (
    <>
      {isKeystaticRoute ? (
        <>{children}</>
      ) : (
        <>
          <Header />
          <StickyHeaderCTA />
          {children}
          <LogoCloud />
          <Footer />
        </>
      )}
    </>
  );
}