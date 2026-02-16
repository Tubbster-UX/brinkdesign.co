"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, X, ArrowRight } from "lucide-react";

export default function StickyHeaderCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 220);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (isDismissed || !isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-primary/20 bg-white/95 shadow-2xl backdrop-blur">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-semibold text-primary">
                        Ready for Cameras, WiFi, AV, or Smart Home?
                    </p>
                    <p className="text-xs text-gray-600 sm:text-sm">
                        Free site walkthrough + clear scope + no-pressure quote.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <Button asChild size="sm" className="font-semibold">
                        <Link href="/contact" className="inline-flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            Book Free Walkthrough
                        </Link>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="font-semibold">
                        <a href="tel:+16053893261" className="inline-flex items-center gap-1">
                            <Phone className="h-4 w-4" />
                            Call Now
                            <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                    </Button>
                    <Button
                        onClick={() => setIsDismissed(true)}
                        variant="ghost"
                        size="sm"
                        className="p-1 text-gray-500 hover:bg-gray-100"
                        aria-label="Dismiss call-to-action"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
