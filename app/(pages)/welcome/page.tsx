import React from 'react';
import Link from 'next/link';
import { VideoPlayer } from '@/components/VideoPlayer';


type Issue = {
    title: string;
    number: number;
    url: string;
    openedBy: string;
    openedAt: string;
    repo: Repo;
}


type Repo = {
    name: string;
    description: string;
    owner: string;
    id: string;
}

type OpenIssuesData = {
    type: 'open-issues';
    data: {
        issues: Issue[];
        totalCount: number;
    }
}

type RepoData = {
    type: 'repos';
    data: {
        repos: Repo[];
        totalCount: number;
    }
}

type EmptyData = {
    type: 'empty';
}


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
                    <div className="flex flex-col items-center mt-8">
                        <div className="w-full max-w-2xl">
                            <VideoPlayer src="/tutorial.mp4" className="w-full aspect-video" />
                        </div>
                        <h2 className="mt-8 text-center text-3xl font-bold md:text-5xl text-white flex items-center gap-3">
                            👨🏻‍🌾 Welcome to AgentFarm!
                        </h2>
                    </div>
                </div>
                <div className="mt-8 bg-gray-800/50 backdrop-blur-sm p-8 md:p-12 rounded-xl ring-1 ring-indigo-500/20">
                    <div className="m-auto max-w-screen-xl prose lg:prose-xl prose-invert prose-headings:text-white prose-a:text-indigo-400 hover:prose-a:text-indigo-300">
                        <p className="text-gray-300 text-xl">
                            Go ahead and create a Github issue to see what the agent can do.
                        </p>
                        <p className="text-gray-300">
                            In case that&apos;s not clear enough, you can take a look at our <Link href="/how-to-use">how to use</Link>.
                        </p>
                        <div className="mt-8 flex justify-center">
                            <Link 
                                href="/tasks" 
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                            >
                                View Initial Tasks
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 