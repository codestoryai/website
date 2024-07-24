import React from 'react';

import Hero from '@/components/hero';
import Sections from '@/components/sections';
import { WaitlistButton } from '@/components/waitlist';

export default async function Home() {
  return (
    <main className="antialiased">
      <WaitlistButton />
      <Hero />
      <Sections />
    </main>
  )
}
