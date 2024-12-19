"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import React from "react";

// Check if the environment is not development
const isNonDevelopment = process.env.NODE_ENV !== "development";

if (typeof window !== "undefined" && isNonDevelopment) {
    // @ts-expect-error
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        capture_pageview: false, // Disable automatic pageview capture, as we capture manually
    });
}

export function PHProvider({ children }: { children: React.ReactNode }) {
    return (
        <PostHogProvider client={isNonDevelopment ? posthog : undefined}>
            {children}
        </PostHogProvider>
    );
}
