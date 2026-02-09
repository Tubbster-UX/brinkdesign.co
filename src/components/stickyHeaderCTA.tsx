"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, X } from "lucide-react";

export default function StickyHeaderCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show the sticky CTA after scrolling 200px
            setIsVisible(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleCallClick = () => {
        window.location.href = "tel:+16053893261"; // Replace with your actual phone number
    };

    if (isDismissed || !isVisible) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-lg animate-in slide-in-from-top duration-300">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:block">
                            <span className="font-semibold">Book a Free Site Assessment</span>
                            <span className="ml-2 text-primary-foreground/80">Same-Day Quotes Available</span>
                        </div>
                        <div className="sm:hidden">
                            <span className="font-semibold">Free Site Visit + Quote</span>

                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button
                            onClick={handleCallClick}
                            variant="secondary"
                            size="sm"
                        >
                            <Phone className="w-4 h-4 mr-1" />
                            <span className="hidden sm:inline">Call Now</span>
                            <span className="sm:hidden">Call</span>
                        </Button>
                        <Button
                            onClick={() => setIsDismissed(true)}
                            variant="ghost"
                            size="sm"
                            className="text-white hover:bg-white/20 p-1"
                        >
                            <X className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}