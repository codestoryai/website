import React from "react";
import { getUser } from "@workos-inc/authkit-nextjs";

import Hero from "@/components/hero";
import Sections from "@/components/sections";

export default async function Home() {
    const { user } = await getUser();

    return (
        <main className="antialiased">
            <Hero />
            <Sections user={user} />
        </main>
    );
}
