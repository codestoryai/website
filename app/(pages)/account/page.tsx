import { getUser } from "@workos-inc/authkit-nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

import { PricingWidget } from "@/components/pricing";
import SignOut from "@/components/signout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Usage } from "@/components/usage";
import { SubscriptionStatus, SubscriptionStatuses, UserProfileResponse } from "@/types/api";

const freeUsage = 2000;
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
            <DialogContent className="w-fit max-w-screen-md">
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
                                <div className="flex gap-2 items-center">
                                    <h3 className="text-2xl font-bold">{user.firstName ?? "" + user.lastName ?? ""}</h3>
                                    {userData &&
                                        <Badge
                                            variant="none"
                                            className={`${SubscriptionStatusStyles[userData.subscriptionStatus]}`}
                                        >
                                            {SubscriptionStatuses[userData.subscriptionStatus]}
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
                    <div className={`flex justify-center ${!!userData.waitlistPosition ? 'opacity-40 pointer-events-none' : ''}`}>
                        <div className="bg-white w-full max-w-screen-xl rounded p-6 flex flex-col gap-4">
                            <div className="flex gap-4 items-center justify-between">
                                <h3 className="text-2xl font-bold">Billing information</h3>
                                <p className="text-gray-500">
                                    Next payment: <b>1st August, 2024</b>
                                </p>
                            </div>
                            <div className="flex gap-4 w-full">
                                <Usage upcomingInvoice={userData.upcomingInvoice} />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-4">
                                    <p className="text-lg text-gray-800">
                                        You are only charged for the code written by AI that you keep.<br />
                                        The first {freeUsage.toLocaleString()} lines are free each month.
                                    </p>
                                    <UpgradeTrigger className="self-start">
                                        <Button>
                                            <p className="text-xl">
                                                Upgrade
                                            </p>
                                        </Button>
                                    </UpgradeTrigger>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="hover:bg-transparent">
                                                <TableHead className="text-lg font-bold">Usage</TableHead>
                                                <TableHead className="text-lg font-bold text-right tracking-wide">$0/mo</TableHead>
                                                <TableHead></TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow className="hover:bg-transparent">
                                                <TableCell className="font-medium text-base">Lines of code</TableCell>
                                                <TableCell className="text-right text-base tracking-wide">{userData.upcomingInvoice.freeUsage.toLocaleString()}/60,000</TableCell>
                                                <TableCell>
                                                    <UpgradeTrigger>
                                                        <Button variant="outline" className="px-2 py-0 border-0 bg-transparent shadow-none hover:bg-background">
                                                            &#8943;
                                                        </Button>
                                                    </UpgradeTrigger>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow className="hover:bg-transparent">
                                                <TableCell className="font-medium text-base">Number of chat conversations</TableCell>
                                                <TableCell className="text-right text-base">
                                                    <div className="inline-flex items-center border border-transparent bg-primary/80 text-primary-foreground px-2.5 py-0.5 text-xs font-semibold">
                                                        unlimited
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <UpgradeTrigger>
                                                        <Button variant="outline" className="px-2 py-0 border-0 bg-transparent shadow-none hover:bg-background">
                                                            &#8943;
                                                        </Button>
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
