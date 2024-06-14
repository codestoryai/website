import DownloadButton from '@/app/_components/downloadButton'
import Footer from '@/app/_components/footer'
import Header from '@/app/_components/header'
import Hero from '@/app/_components/hero'
import Sections from '@/app/_components/sections'
import { fetchLatestRelease } from '@/app/_utilities/github'
import { DeviceDetails, cleanDeviceDetails } from '@/app/_utilities/ua'
import React from 'react'

export default async function Home() {
  const latestRelease = await fetchLatestRelease()
  let currentDevice: DeviceDetails | undefined
  if (latestRelease.current) {
    // eslint-disable-next-line @typescript-eslint/await-thenable
    currentDevice = await cleanDeviceDetails(latestRelease.current)
  }

  return (
    <main className="antialiased">
      <DownloadButton />
      <Header deviceDetails={currentDevice} />
      <Hero deviceDetails={currentDevice} />
      <Sections latestRelease={latestRelease} />
      <Footer />
    </main>
  )
}
