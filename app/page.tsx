import { getUser } from "@workos-inc/authkit-nextjs";
import React from "react";

import HomePage from "@/components/home";
import { fetchLatestRelease } from "@/lib/github";
import { cleanDeviceDetails, DeviceDetails } from "@/lib/ua";

export default async function Home() {
    const { user } = await getUser();
    const latestRelease = await fetchLatestRelease();
    let currentDevice: DeviceDetails | undefined;
    if (latestRelease.current) {
        currentDevice = cleanDeviceDetails(latestRelease.current);
    }

    return (
        <main className="antialiased">
            {/* <Hero />
            <Sections user={user} /> */}
            <HomePage
                deviceDetails={currentDevice}
                latestRelease={latestRelease}
            />
        </main>
    );
}
