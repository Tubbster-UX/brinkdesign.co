'use client';

import { sendGAEvent } from '@next/third-parties/google';

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-K6VB75FMGH';

export function trackPageView(path: string) {
  if (!GA_ID) return;
  sendGAEvent('event', 'page_view', {
    page_path: path,
  });
}

export function trackEvent(action: string, params?: Record<string, any>) {
  if (!GA_ID) return;
  sendGAEvent('event', action, params ?? {});
}
