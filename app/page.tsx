import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Sections from '@/components/sections'
import React from 'react'

import { WaitlistButton } from '../components/waitlist'

export default async function Home() {
  return (
    <main className="antialiased">
      <WaitlistButton />
      <Hero />
      <Sections />
    </main>
  )
}
