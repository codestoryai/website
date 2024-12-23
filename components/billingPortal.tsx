"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

type BillingPortalButtonProps = {
    accessToken: string;
};

type BillingPortalResponse = {
    url: string;
};

export const BillingPortalButton = ({
    accessToken,
}: BillingPortalButtonProps) => {
    const router = useRouter();

    const handleBillingPortalClick = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_SUBSCRIPTION_SERVICE_URL}/v1/subscriptions/billing-portal`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Failed to get billing portal URL");
            }

            const data = (await response.json()) as BillingPortalResponse;
            if (data.url) {
                router.push(data.url);
            }
        } catch (error) {
            console.error("Error accessing billing portal:", error);
        }
    };

    return (
        <Button onClick={handleBillingPortalClick} className="self-start">
            Manage subscription and invoices
        </Button>
    );
};
