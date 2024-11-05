import { getUser } from '@workos-inc/authkit-nextjs';
import React from 'react';

import Hero from '@/components/hero';
import HomePage from '@/components/home';
import Sections from '@/components/sections';

export default async function Home() {
  const { user } = await getUser();

  return (
    <main className="antialiased">
      {/* <Hero />
      <Sections user={user} /> */}
      <HomePage />
    </main>
  )
}
