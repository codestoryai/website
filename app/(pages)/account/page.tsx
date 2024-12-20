import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { getUser } from "@workos-inc/authkit-nextjs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { PricingWidget } from "@/components/pricing";
import SignOut from "@/components/signout";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Usage } from "@/components/usage";
import {
    SubscriptionResponse,
    SubscriptionStatus,
    SubscriptionStatuses,
    UserProfileResponse,
} from "@/types/api";
import { Button } from "@/components/ui/button";
import { formatUnixTimestamp, getCurrentMonthYear } from "@/lib/formatDateTime";

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
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            ),
            fetch(
                `${process.env.NEXT_PUBLIC_SUBSCRIPTION_SERVICE_URL}/v1/subscriptions`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            ),
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
        free: "text-sm bg-green-100 text-green-800",
        active: "text-sm bg-purple-100 text-purple-800",
        cancelled: "text-sm bg-red-100 text-red-800",
    };

    const UpgradeTrigger = ({
        children,
        className,
    }: {
        children: React.ReactNode;
        className?: string;
    }) => (
        <Dialog>
            <DialogTrigger className={className}>{children}</DialogTrigger>
            <DialogContent className="w-full max-w-screen-md md:w-fit">
                <VisuallyHidden>
                    <DialogTitle>Pricing widget</DialogTitle>
                    <DialogDescription>
                        Choose the pricing configuration
                    </DialogDescription>
                </VisuallyHidden>
                <PricingWidget accessToken={accessToken} />
            </DialogContent>
        </Dialog>
    );

    return (
        <div className="min-h-screen bg-background bg-noise p-8 pt-20 md:p-12 md:pt-24">
            <div className="m-auto max-w-screen-xl">
                <div className="my-12 flex flex-col items-center">
                    <h2 className="pt-4 text-center text-3xl font-bold md:text-5xl">
                        Your account
                    </h2>
                    <h3 className="text-center text-xl text-primary">
                        Manage your account and billing information
                    </h3>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-center">
                    <div className="flex w-full max-w-screen-xl flex-col justify-between rounded bg-white p-4 md:flex-row md:p-6">
                        <div className="mb-4 flex gap-4 md:mb-0">
                            <div>
                                {user.profilePictureUrl ? (
                                    <Image
                                        src={user.profilePictureUrl}
                                        alt="User profile picture"
                                        width={64}
                                        height={64}
                                        className="rounded-full"
                                    />
                                ) : (
                                    <div className="h-20 w-20 rounded-full bg-gray-200"></div>
                                )}
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-2xl font-bold">
                                        {user.firstName ??
                                            "" + user.lastName ??
                                            ""}
                                    </h3>
                                    {subscriptionData && (
                                        <Badge
                                            variant="none"
                                            className={`${SubscriptionStatusStyles[subscriptionData.status]}`}
                                        >
                                            {
                                                SubscriptionStatuses[
                                                    subscriptionData.status
                                                ]
                                            }
                                        </Badge>
                                    )}
                                </div>
                                <p className="text-lg text-gray-500">
                                    {user.email}
                                </p>
                            </div>
                        </div>
                        <SignOut />
                    </div>
                </div>
                {!!userData?.waitlistPosition && (
                    <div className="flex justify-center">
                        <div className="flex w-full max-w-screen-xl flex-row gap-4 rounded bg-white p-6 md:flex-col">
                            <div className="text-2xl md:mr-4">
                                You are on the waitlist! But you shouldn&apos;t
                                be here.
                            </div>
                            <div className="text-lg text-gray-500">
                                We used to have a waitlist, but we removed it.
                                Please let us know on{" "}
                                <Link
                                    href="https://discord.gg/mtgrhXM5Xf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline"
                                >
                                    Discord
                                </Link>{" "}
                                if you&apos;re seeing this.
                            </div>
                        </div>
                    </div>
                )}
                {subscriptionData.usage && (
                    <div
                        className={`flex justify-center ${!!userData.waitlistPosition ? "pointer-events-none opacity-40" : ""}`}
                    >
                        <div className="flex w-full max-w-screen-xl flex-col gap-4 rounded bg-white p-6">
                            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                                <h3 className="text-2xl font-bold">
                                    Usage & billing
                                </h3>
                                <p className="text-gray-500">
                                    {subscriptionData.subscriptionEnding && (
                                        <>
                                            <span>Next payment: </span>
                                            <b>
                                                {formatUnixTimestamp(
                                                    subscriptionData.subscriptionEnding
                                                )}
                                            </b>
                                        </>
                                    )}
                                </p>
                            </div>
                            <div className="flex w-full gap-4">
                                <Usage usage={subscriptionData.usage} />
                            </div>
                            <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
                                <div className="flex flex-col gap-4">
                                    <p className="pt-[9px] text-base text-gray-800 md:text-lg">
                                        Every time you message the assistant and
                                        get a complete response, it counts as an
                                        invocation. 50 invocations are free
                                        every month.
                                    </p>
                                    {subscriptionData.status === "free" ? (
                                        <UpgradeTrigger className="self-start">
                                            <p className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-base font-medium text-primary-foreground shadow-lg ring-offset-background transition-colors hover:bg-primary/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-[0.1rem] active:shadow-inner disabled:pointer-events-none disabled:opacity-50 md:text-xl">
                                                Upgrade
                                            </p>
                                        </UpgradeTrigger>
                                    ) : (
                                        <Button className="self-start">
                                            <a
                                                href={
                                                    subscriptionData.billingPortal
                                                }
                                            >
                                                Manage subscription and invoices
                                            </a>
                                        </Button>
                                    )}
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="hover:bg-transparent">
                                                <TableHead className="text-base font-bold md:text-lg">
                                                    {getCurrentMonthYear()}{" "}
                                                </TableHead>
                                                <TableHead className="text-right text-base font-bold tracking-wide md:text-lg">
                                                    {subscriptionData.status ===
                                                    "free" ? (
                                                        "Free tier"
                                                    ) : (
                                                        <div className="ml-4 inline-flex items-center border border-transparent bg-primary/80 px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
                                                            unlimited
                                                        </div>
                                                    )}
                                                </TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow className="hover:bg-transparent">
                                                <TableCell className="text-sm font-medium md:text-base">
                                                    Agent invocations
                                                </TableCell>
                                                <TableCell className="text-right text-sm tracking-wide md:text-base">
                                                    {(
                                                        subscriptionData.usage
                                                            .breakdown[
                                                            "AgenticRequest"
                                                        ] ?? 0
                                                    ).toLocaleString()}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow className="hover:bg-transparent">
                                                <TableCell className="text-sm font-medium md:text-base">
                                                    Chat invocations
                                                </TableCell>
                                                <TableCell className="text-right text-sm md:text-base">
                                                    <div className="tracking-wide">
                                                        {(
                                                            subscriptionData
                                                                .usage
                                                                .breakdown[
                                                                "ChatRequest"
                                                            ] ?? 0
                                                        ).toLocaleString()}
                                                    </div>
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
