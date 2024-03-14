'use client';

import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="font-replica antialiased">
      <Header />
      <div className="p-12 pt-24 bg-noise bg-background">
        <Hero />
      </div>
    </main>
  );
}
