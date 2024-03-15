import DownloadButton from "@/components/downloadButton";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Sections from "@/components/sections";
import { fetchLatestRelease } from "@/lib/github";
import { DeviceDetails, cleanDeviceDetails } from "@/lib/ua";

export default async function Home() {
  const latestRelease = await fetchLatestRelease();
  let currentDevice: DeviceDetails | undefined;
  if (latestRelease.current) {
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
