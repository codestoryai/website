"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const PricingPage = () => {
	const [isAnnual, setIsAnnual] = useState(false);

	const pricingTiers = [
		{
			name: "Free",
			description: "Perfect for getting started",
			price: "Free",
			features: [
				"50 invocations per month",
				"1 agent",
				"Support from developers",
			],
			period: "forever",
			cta: "Sign up",
			ctaLink: "/authenticate",
			highlight: false
		},
		{
			name: "Creator",
			description: "Unlock infinite work",
			price: isAnnual ? "$16" : "$20",
			period: isAnnual ? "/month (billed annually)" : "/month",
			features: [
				"Infinite invocations",
				"1 agent",
				"Priority support"
			],
			cta: "Get Creator",
			ctaLink: "/authenticate",
			highlight: true
		},
		{
			name: "Mastermind",
			description: "For creators of the futre",
			price: "Coming soon",
			features: [
				"Infinite invocations",
				"N agents",
				"Early access and VIP treatment"
			],
			cta: "Request access",
			ctaLink: "founders@codestory.ai",
			highlight: false
		}
	];

	return (
		<div className="min-h-screen bg-background bg-noise p-8 pt-20 md:p-12 md:pt-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-5xl mt-8">
						Simple, transparent pricing
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						Choose the plan that's right for you
					</p>
				</div>

				<div className="mt-8 flex justify-center">
					<div className="relative flex items-center gap-2 rounded-full bg-white p-1 shadow-sm">
						<button
							onClick={() => setIsAnnual(false)}
							className={`rounded-full px-4 py-2 text-sm transition-all ${
								!isAnnual ? "bg-primary text-white" : "text-gray-700"
							}`}
						>
							Monthly
						</button>
						<button
							onClick={() => setIsAnnual(true)}
							className={`rounded-full px-4 py-2 text-sm transition-all ${
								isAnnual ? "bg-primary text-white" : "text-gray-700"
							}`}
						>
							Annual
							<span className={cn("ml-1 text-xs font-bold", isAnnual ? "text-white" : "text-green-500")}>
								Save 20%
							</span>
						</button>
					</div>
				</div>

				<div className="mt-12 grid gap-8 lg:grid-cols-3">
					{pricingTiers.map((tier) => (
						<div
							key={tier.name}
							className={`rounded-lg bg-white p-8 shadow-lg ring-1 ring-gray-200 ${
								tier.highlight
									? "relative ring-2 ring-primary"
									: ""
							}`}
						>
							{tier.highlight && (
								<span className="absolute -top-4 left-1/2 -translate-x-1/2 transform rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
									Most popular
								</span>
							)}
							<div className="mb-8">
								<h3 className="text-xl font-bold">{tier.name}</h3>
								<p className="mt-2 text-gray-500">
									{tier.description}
								</p>
								<div className="mt-6 inline-flex gap-1 items-baseline flex-wrap">
									<span className="text-4xl font-bold">
										{tier.price}
									</span>
									{tier.period && (
										<span className="text-gray-500">
											{tier.period}
										</span>
									)}
								</div>
							</div>
							<ul className="mb-8 space-y-4">
								{tier.features.map((feature) => (
									<li
										key={feature}
										className="flex items-center gap-2"
									>
										<Check className="h-5 w-5 text-green-500" />
										<span>{feature}</span>
									</li>
								))}
							</ul>
							<Link
								href={tier.ctaLink}
								className={`block w-full rounded-lg px-4 py-2 -mb-1 text-center text-sm font-semibold transition-all ${
									tier.highlight
										? "bg-primary text-white hover:bg-primary/90"
										: "bg-gray-50 text-gray-700 hover:bg-gray-100"
								}`}
							>
								{tier.cta}
							</Link>
						</div>
					))}
				</div>

				<div className="mt-12 text-center">
					<p className="text-gray-600">
						Looking for enterprise solutions?{" "}
						<Link
							href="mailto:founders@codestory.ai"
							className="font-semibold text-primary hover:underline"
						>
							Get in touch
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default PricingPage;