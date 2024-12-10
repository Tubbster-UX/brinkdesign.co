"use client"
import { useEffect } from "react";

// Extend the window interface to include Calendly
declare global {
  interface Window {
    Calendly: any;
  }
}

export default function CalendlyEmbed() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      window.Calendly.initBadgeWidget({
        url: 'https://calendly.com/alexavierb-brinkdesign/30min',
        text: 'Schedule a Meeting',
        color: '#1f2937',
        textColor: '#ffffff'
      });
    };
    document.body.appendChild(script);
  }, []);

  return null;
}