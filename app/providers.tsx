"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import React from "react";

if (typeof window !== "undefined") {
    // @ts-expect-error
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        capture_pageview: false, // Disable automatic pageview capture, as we capture manually
    });
}

export function PHProvider({ children }: { children: React.ReactNode }) {
    return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
