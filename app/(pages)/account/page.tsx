import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { getUser } from "@workos-inc/authkit-nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

import { PricingWidget } from "@/components/pricing";
import SignOut from "@/components/signout";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Usage } from "@/components/usage";
import { SubscriptionResponse, SubscriptionStatus, SubscriptionStatuses, UserProfileResponse } from "@/types/api";

const freeUsage = 1000;
export default async function AccountPage() {
    const { user, accessToken } = await getUser({ ensureSignedIn: true });
    let userData: UserProfileResponse | null = null;
    let subscriptionData: SubscriptionResponse | null = null;
    try {
        const [userDetails, subscriptionDetails] = await Promise.all([
            fetch(
                `${process.env.NEXT_PUBLIC_SUBSCRIPTION_SERVICE_URL}/v1/users/me`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    }
                }
            ),
            fetch(
                `${process.env.NEXT_PUBLIC_SUBSCRIPTION_SERVICE_URL}/v1/subscriptions`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    }
                }
            )
        ]);

        if (!userDetails.ok || !subscriptionDetails.ok) {
            redirect("/");
        }

        userData = await userDetails.json();
        subscriptionData = await subscriptionDetails.json();
    } catch (error) {
        redirect("/");
    }

    if (!userData || !subscriptionData) {
        redirect("/");
    }

    const SubscriptionStatusStyles: Record<SubscriptionStatus, string> = {
        "free": "text-sm bg-green-100 text-green-800",
        "active": "text-sm bg-purple-100 text-purple-800",
        "cancelled": "text-sm bg-red-100 text-red-800",
    };

    const UpgradeTrigger = ({ children, className }: { children: React.ReactNode, className?: string }) => (
        <Dialog>
            <DialogTrigger className={className}>
                {children}
            </DialogTrigger>
            <DialogContent className="w-full md:w-fit max-w-screen-md">
                <VisuallyHidden>
                    <DialogTitle>Pricing widget</DialogTitle>
                    <DialogDescription>Choose the pricing configuration</DialogDescription>
                </VisuallyHidden>
                <PricingWidget />
            </DialogContent>
        </Dialog>
    );

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
                    <div className="bg-white w-full max-w-screen-xl rounded flex flex-col md:flex-row justify-between p-4 md:p-6">
                        <div className="flex gap-4 mb-4 md:mb-0">
                            <div>
                                {user.profilePictureUrl ? (
                                    <Image src={user.profilePictureUrl} alt="User profile picture" width={64} height={64} className="rounded-full" />
                                ) : (
                                    <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                                )}
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex gap-2 items-center">
                                    <h3 className="text-2xl font-bold">{user.firstName ?? "" + user.lastName ?? ""}</h3>
                                    {subscriptionData &&
                                        <Badge
                                            variant="none"
                                            className={`${SubscriptionStatusStyles[subscriptionData.status]}`}
                                        >
                                            {SubscriptionStatuses[subscriptionData.status]}
                                        </Badge>
                                    }
                                </div>
                                <p className="text-lg text-gray-500">{user.email}</p>
                            </div>
                        </div>
                        <SignOut />
                    </div>
                </div>
                {!!userData?.waitlistPosition && (
                    <div className="flex justify-center">
                        <div className="bg-white w-full max-w-screen-xl rounded p-6 flex flex-row md:flex-col gap-4">
                            <div className="text-2xl md:mr-4">You are <b>#{userData.waitlistPosition}</b> on the waitlist!</div>
                            <div className="text-lg text-gray-500">
                                We are rapidly opening up access to users on our waitlist, and will be hitting GA pretty soon.<br />
                                Having a waitlist is currently the best way for us to manage the growth of our platform and fixing the main issues before we go live.<br />
                                We appreciate your patience and can&apos;t wait to have you onboard!
                            </div>
                        </div>
                    </div>
                )}
                {subscriptionData?.upcomingInvoice && (
                    <div className={`flex justify-center ${!!userData.waitlistPosition ? 'opacity-40 pointer-events-none' : ''}`}>
                        <div className="bg-white w-full max-w-screen-xl rounded p-6 flex flex-col gap-4">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                <h3 className="text-2xl font-bold">Usage & billing</h3>
                                <p className="text-gray-500">
                                    Next payment: <b>1st August, 2024</b>
                                </p>
                            </div>
                            <div className="flex gap-4 w-full">
                                <Usage upcomingInvoice={subscriptionData.upcomingInvoice} />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-4">
                                    <p className="text-base md:text-lg text-gray-800">
                                        You are only charged for the code changes by AI that you keep. The first {freeUsage.toLocaleString()} lines are free each month.
                                    </p>
                                    <UpgradeTrigger className="self-start">
                                        <p className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:shadow-inner active:translate-y-[0.1rem] bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-md text-base md:text-xl px-4 py-2">
                                            Upgrade
                                        </p>
                                    </UpgradeTrigger>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="hover:bg-transparent">
                                                <TableHead className="font-bold text-base md:text-lg">Usage</TableHead>
                                                <TableHead className="font-bold text-right tracking-wide text-base md:text-lg">$0/mo</TableHead>
                                                <TableHead></TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow className="hover:bg-transparent">
                                                <TableCell className="font-medium text-sm md:text-base">Lines of code</TableCell>
                                                <TableCell className="text-right text-sm md:text-base tracking-wide">{(subscriptionData.upcomingInvoice.freeUsage + subscriptionData.upcomingInvoice.overageUsage).toLocaleString()}/20,000</TableCell>
                                                <TableCell>
                                                    <UpgradeTrigger className="px-2 py-0 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:shadow-inner active:translate-y-[0.1rem] border-0 bg-transparent hover:bg-background shadow-none hover:shadow-md">
                                                        &#8943;
                                                    </UpgradeTrigger>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow className="hover:bg-transparent">
                                                <TableCell className="font-medium text-sm md:text-base">Number of chat conversations</TableCell>
                                                <TableCell className="text-right text-sm md:text-base">
                                                    <div className="inline-flex items-center border border-transparent bg-primary/80 text-primary-foreground px-2.5 py-0.5 text-xs font-semibold">
                                                        unlimited
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <UpgradeTrigger className="px-2 py-0 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:shadow-inner active:translate-y-[0.1rem] border-0 bg-transparent hover:bg-background shadow-none hover:shadow-md">
                                                        &#8943;
                                                    </UpgradeTrigger>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
