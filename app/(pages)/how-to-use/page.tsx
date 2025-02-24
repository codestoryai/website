import React from 'react';

export default function HowToUsePage() {
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
                        <h2 className="pt-4 text-center text-3xl font-bold md:text-5xl text-white flex items-center gap-3">
                            👨🏻‍🌾 How to use AgentFarm
                        </h2>
                        <p className="text-center text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
                            Welcome to the future of coding!
                        </p>
                    </div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-8 md:p-12 rounded-xl ring-1 ring-indigo-500/20">
                    <div className="m-auto max-w-screen-xl prose lg:prose-xl prose-invert prose-headings:text-white prose-a:text-indigo-400 hover:prose-a:text-indigo-300">
                        <h3>What it does</h3>
                        <p className="text-gray-300">
                            With AgentFarm, you can spawn multiple agents on your codebase. The agents can:
                        </p>
                        <ol className="text-gray-300">
                            <li>Write code</li>
                            <li>Search your codebase</li>
                            <li>Use the terminal</li>
                        </ol>
                        <p className="text-gray-300">
                            In other words, you can assign them any task you would give a mid-level engineer. 
                            They will act autonomously, and continue working in the background even if you close your repo.
                        </p>
                        <p className="text-gray-300">
                            For example, they can add features, fix bugs or start a project from scratch. 
                            They can include and run tests for each new piece of logic.
                        </p>
                        <p className="text-gray-300">
                            You&apos;ll be surprised to see how much work can be done – and you&apos;ll able to focus your attention 
                            on more mission-critical aspects of your product and company.
                        </p>

                        <h3>How to use it</h3>
                        <p className="text-gray-300">
                            AgentFarm works on top of your Github repo – no configuration required. Just add our Github app to your repo(s).
                        </p>
                        <div className="space-y-6">
                            <div className="bg-gray-700/30 p-6 rounded-lg border border-indigo-500/20 flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                                    1
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-2 !mt-0">Open a Github Issue</h4>
                                    <p className="text-gray-300 m-0 !pb-1">
                                        To spawn a new agent, just open a Github issue and write your request. You don&apos;t need to be thorough.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-700/30 p-6 rounded-lg border border-indigo-500/20 flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                                    2
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-2 !mt-0">Review the PR</h4>
                                    <p className="text-gray-300 m-0 !pb-1">
                                        The agent will open a PR. Here, it will give you status updates. This is also where you will be able to iterate, 
                                        and work towards your goal – if our agent didn&apos;t one-shot it, that is.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-700/30 p-6 rounded-lg border border-indigo-500/20 flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                                    3
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-2 !mt-0">Merge and Done!</h4>
                                    <p className="text-gray-300 m-0 !pb-1">
                                        When you&apos;re happy, merge the PR! The changes are now part of your codebase.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h3>Usage and pricing</h3>
                        <p className="text-gray-300">
                            You can try AgentFarm for free, no credit card required, and open 3 PRs with it.
                        </p>
                        <p className="text-gray-300">
                            If you like what the agent did, and want to get more, you can purchase a paid plan at this link. 
                            We will upgrade your AgentFarm app within 24 hours.
                        </p>
                        <p className="text-gray-300">
                            We offer an early-bird 99$ plan, which gives you 1000 PRs per month.
                        </p>

                        <h3>FAQs</h3>
                        <div className="space-y-4">
                            <details className="group">
                                <summary className="flex cursor-pointer items-center rounded-lg bg-gray-700/50 px-4 py-4 text-lg text-white hover:bg-gray-700/70">
                                    Does your agent work on other services, other than Github?
                                </summary>
                                <div className="mt-4 px-4 text-gray-300">
                                    No, we currently support Github only.
                                </div>
                            </details>
                            <details className="group">
                                <summary className="flex cursor-pointer items-center rounded-lg bg-gray-700/50 px-4 py-4 text-lg text-white hover:bg-gray-700/70">
                                    Do you have a money-back guarantee policy?
                                </summary>
                                <div className="mt-4 px-4 text-gray-300">
                                    Yes, if you are not satisfied with the work of our agents, you will get all of your money back, hassle-free.
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 