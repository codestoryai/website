import { getUser } from '@workos-inc/authkit-nextjs';
import React from 'react';

import HomePage from '@/components/home';

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
