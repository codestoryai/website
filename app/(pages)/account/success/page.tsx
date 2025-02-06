import { getUser } from "@workos-inc/authkit-nextjs";
import { redirect } from "next/navigation";


export default async function SuccessPage() {
    const { accessToken } = await getUser({ ensureSignedIn: true });

    console.log('[subscription] Success page init')
    
    const stripeCustomerIdRequest = await fetch(
        `${process.env.NEXT_PUBLIC_SUBSCRIPTION_SERVICE_URL}/v1/subscriptions/customer`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        }
    )

    const data = await stripeCustomerIdRequest.json()

    const { customerId } = data

    console.log('[subscription] Got customer id', data);

    if (!customerId) {
        return redirect("/account");
    }

    // Sync Stripe data to DB
    const syncRequest = await fetch(
        `${process.env.NEXT_PUBLIC_SUBSCRIPTION_SERVICE_URL}/v1/subscriptions/sync-stripe-data`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            method: 'POST',
            body: JSON.stringify({ customerId })
        }
    )

    console.log('[subscription] Synced', syncRequest.ok)

    return redirect("/account");
}
