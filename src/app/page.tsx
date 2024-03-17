import DownloadButton from "@/_components/downloadButton";
import Footer from "@/_components/footer";
import Header from "@/_components/header";
import Hero from "@/_components/hero";
import Sections from "@/_components/sections";
import { fetchLatestRelease } from "@/_utilities/github";
import { DeviceDetails, cleanDeviceDetails } from "@/_utilities/ua";
import React from "react";

export default async function Home() {
  const latestRelease = await fetchLatestRelease();
  let currentDevice: DeviceDetails | undefined;
  if (latestRelease.current) {
    // eslint-disable-next-line @typescript-eslint/await-thenable
    currentDevice = await cleanDeviceDetails(latestRelease.current);
  }

  return (
    <main className="antialiased">
      <DownloadButton />
      <Header />
      <Hero deviceDetails={currentDevice} />
      <Sections latestRelease={latestRelease}/>
      <Footer />
    </main >
  );
}
