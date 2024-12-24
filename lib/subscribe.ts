"use server";

import { redirect } from "next/navigation";

import { CreateSubscriptionResponse } from "@/types/api";

export const onSubscribe = async (
    accessToken: string,
    units: number,
    annual: boolean
) => {
    let checkoutSessionURL: string | null = null;
    try {
        const checkoutSession = await fetch(
            `${process.env.NEXT_PUBLIC_SUBSCRIPTION_SERVICE_URL}/v1/subscriptions`,
            {
                method: "POST",
                body: JSON.stringify({ units, annual }),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        if (checkoutSession.ok) {
            const checkoutSessionBody =
                (await checkoutSession.json()) as CreateSubscriptionResponse;
            checkoutSessionURL = checkoutSessionBody.checkoutSessionURL;
        }
    } catch (error) {
        console.error("Failed to create checkout session", error);
    } finally {
        if (checkoutSessionURL) {
            console.log("Redirecting to checkout session", checkoutSessionURL);
            redirect(checkoutSessionURL);
        }
    }
};
