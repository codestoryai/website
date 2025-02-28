import React from 'react';
import Link from 'next/link';
import { VideoPlayer } from '@/components/VideoPlayer';
import { StyledBreak } from '@/components/ui/StyledBreak';

export default function GetStartedPage() {
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
                <div className="m-auto max-w-prose">
                    <div className="flex flex-col items-center mt-8">
                       
                        <h2 className="mt-16 mb-6 text-center text-3xl font-bold md:text-5xl text-white flex items-center gap-3">
                            Get started
                        </h2>
                    </div>
                </div>
                <div className="w-fit mx-auto mt-8 bg-gray-800/50 backdrop-blur-sm p-8 md:p-12 rounded-xl ring-1 ring-indigo-500/20">
                    <div className="m-auto max-w-prose prose lg:prose-xl prose-invert prose-headings:text-white prose-a:text-indigo-400 hover:prose-a:text-indigo-300">
                    <blockquote className="text-gray-300 text-xl">
                            Agents entered the chat.
                        </blockquote>

                        <p className="text-gray-300">
                            They&apos;re looking for open issues in your repos. They&apos;ll get busy and fix your problems for you. <a href="https://github.com/notifications" target="_blank" rel="noopener noreferrer">Keep an eye out for your Github notifications</a>.
                        </p>

                        <p className="text-gray-300">
                            If your repos don&apos;t have any open issues, make a new issue. The agent will start working on it right away.
                        </p>

                        <StyledBreak />

                        <p className="text-gray-300 font-semibold">To recap:</p>

                        <ol className="text-gray-300">
                            <li><strong>Open an issue</strong>. The agent will open a PR.</li>
                            <li><strong>Iterate on the PR</strong>.</li>
                            <li><strong>Profit</strong> (Merge)</li>
                        </ol>

                        <StyledBreak />

                        <p className="text-gray-300">
                            If you&apos;re more of a visual person, <a href="https://gist.github.com/user-attachments/assets/d515e4d1-acf3-4fe9-aeb9-10881957e14e" target="_blank" rel="noopener noreferrer">here is a video that illustrates the process</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 