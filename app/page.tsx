import Footer from '@/app/_components/footer'
import Header from '@/app/_components/header'
import Hero from '@/app/_components/hero'
import Sections from '@/app/_components/sections'
import React from 'react'

import { WaitlistButton } from './_components/waitlist'

export default async function Home() {
  return (
    <main className="antialiased">
      <WaitlistButton />
      <Hero />
      <Sections />
    </main>
  )
}
