import Footer from '@/app/_components/footer'
import Header from '@/app/_components/header'
import Hero from '@/app/_components/hero'
import Sections from '@/app/_components/sections'
import { fetchLatestRelease } from '@/app/_utilities/github'
import { DeviceDetails, cleanDeviceDetails } from '@/app/_utilities/ua'
import React from 'react'

import { WaitlistButton, WaitlistContextProvider } from './_components/waitlist'

export default async function Home() {
  const latestRelease = await fetchLatestRelease()

  let currentDevice: DeviceDetails | undefined

  if (latestRelease.current) {
    currentDevice = cleanDeviceDetails(latestRelease.current)
  }

  return (
    <main className="antialiased">
      <WaitlistContextProvider deviceDetails={currentDevice}>
        <WaitlistButton />
        <Header />
        <Hero />
        <Sections />
        <Footer />
      </WaitlistContextProvider>
    </main>
  )
}
