import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WelcomePage() {
    return (
        <div className="relative overflow-hidden bg-black min-h-screen">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5,#0ea5e9)] opacity-20"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="animate-blob absolute -left-4 -top-4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl filter"></div>
                    <div className="animate-blob animation-delay-2000 absolute -right-4 top-1/2 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl filter"></div>
                </div>
            </div>

            {/* Main content */}
            <div className="relative p-8 pt-20 md:p-12 md:pt-24">
                <div className="m-auto max-w-screen-xl">
                    <div className="my-12 flex flex-col items-center">
                        <div className="relative w-96 aspect-[4/3] mb-8 overflow-hidden rounded-lg ring-1 ring-indigo-500/20">
                            <Image
                                src="/farmer.jpeg"
                                alt="Friendly farmer in overalls and plaid shirt"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <h2 className="pt-4 text-center text-3xl font-bold md:text-5xl text-white flex items-center gap-3">
                            👨🏻‍🌾 Welcome to AgentFarm!
                        </h2>
                    </div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-8 md:p-12 rounded-xl ring-1 ring-indigo-500/20">
                    <div className="m-auto max-w-screen-xl prose lg:prose-xl prose-invert prose-headings:text-white prose-a:text-indigo-400 hover:prose-a:text-indigo-300">
                        <p className="text-gray-300 text-xl">
                            We just created an example issue for you. <a href="https://github.com/notifications" target="_blank" rel="noopener noreferrer">Check out your notifications</a> and see our newly created issue.
                        </p>
                        <p className="text-gray-300">
                            In case that&apos;s not clear enough, you can take a look at our <Link href="/how-to-use">how to use</Link>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 