import { getUser } from "@workos-inc/authkit-nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

import SignOut from "@/components/signout";
import { UserProfileResponse } from "@/types/api";
import { Button } from "@/components/ui/button";
import { Usage } from "@/components/usage";

const freeUsage = 5000;
export default async function AccountPage() {
    const { user, accessToken } = await getUser({ ensureSignedIn: true });
    let userData: UserProfileResponse | null = null;
    try {
        const userDetails = await fetch(
            `${process.env.NEXT_PUBLIC_SUBSCRIPTION_SERVICE_URL}/v1/users/me`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            }
        );

        if (!userDetails.ok) {
            redirect("/");
        }

        userData = await userDetails.json();
    } catch (error) {
        redirect("/");
    }

    return (
        <div className="min-h-screen p-8 md:p-12 pt-20 md:pt-24 bg-noise bg-background">
            <div className="max-w-screen-xl m-auto">
                <div className="my-12 flex flex-col items-center">
                    <h2 className="pt-4 text-3xl md:text-5xl font-bold text-center">
                        Your account
                    </h2>
                    <h3 className="text-xl text-primary text-center">Manage your account and billing information</h3>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-center">
                    <div className="bg-white w-full max-w-screen-xl rounded flex justify-between p-6">
                        <div className="flex gap-4">
                            <div>
                                {user.profilePictureUrl ? (
                                    <Image src={user.profilePictureUrl} alt="User profile picture" width={64} height={64} className="rounded-full" />
                                ) : (
                                    <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                                )}
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-2xl font-bold">{user.firstName ?? "" + user.lastName ?? ""}</h3>
                                <p className="text-lg text-gray-500">{user.email}</p>
                            </div>
                        </div>
                        <SignOut />
                    </div>
                </div>
                {!!userData?.waitlistPosition && (
                    <div className="flex justify-center">
                        <div className="bg-white w-full max-w-screen-xl rounded p-6 flex flex-col gap-4">
                            <div className="text-2xl">You are <b>#{userData.waitlistPosition}</b> on the waitlist!</div>
                            <div className="text-lg text-gray-500">
                                We are rapidly opening up access to users on our waitlist, and will be hitting GA pretty soon.<br />
                                Having a waitlist is currently the best way for us to manage the growth of our platform and fixing the main issues before we go live.<br />
                                We appreciate your patience and can&apos;t wait to have you onboard!
                            </div>
                        </div>
                    </div>
                )}
                {userData?.upcomingInvoice && (
                    <div className="flex justify-center">
                        <div className="bg-white w-full max-w-screen-xl rounded p-6 flex flex-col gap-4">
                            <div className="flex gap-4 items-center">
                                <h3 className="text-2xl font-bold">Billing information</h3>
                                <p className="text-gray-500">
                                    Your first {freeUsage.toLocaleString()} lines are free!
                                </p>
                            </div>
                            <div className="flex gap-4 w-full">
                                <Usage
                                    date="Today"
                                    freeUsage={userData.upcomingInvoice.freeUsage}
                                    overageUsage={userData.upcomingInvoice.overageUsage}
                                    estimatedUsage={userData.upcomingInvoice.estimatedUsage}
                                />
                            </div>
                            <div className="flex justify-between gap-4">
                                <div className="flex flex-1 flex-col gap-2">
                                    <div className="text-6xl">
                                        {(userData.upcomingInvoice.freeUsage + userData.upcomingInvoice.overageUsage).toLocaleString()}
                                    </div>
                                    <p className="text-lg text-gray-500">
                                        lines of code written with AI
                                    </p>
                                </div>
                                <div className="flex flex-1 gap-8">
                                    <div className="flex flex-col justify-end gap-2">
                                        <div className="text-6xl">
                                            ${userData.upcomingInvoice.amountDue.toLocaleString()}
                                        </div>
                                        <p className="text-lg text-gray-500">
                                            Month-to-date
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-end gap-2">
                                        <div className="text-4xl text-gray-500">
                                            ${userData.upcomingInvoice.projectedAmount.toLocaleString()}
                                        </div>
                                        <p className="text-lg text-gray-500">
                                            Projected
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-1 justify-end align-bottom">
                                    <Button className="self-end" size="sm" variant="default">
                                        <a className="flex items-center" href={userData.billingPortal}>
                                            <p className="text-xl">
                                                Manage billing
                                            </p>
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
