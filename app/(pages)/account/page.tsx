import { getUser } from "@workos-inc/authkit-nextjs";
import { unsealData } from "iron-session";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

import SignOut from "@/components/signout";
import { UserProfileResponse } from "@/types/api";
import Link from "next/link";

const cookieName = "wos-session";
export default async function AccountPage() {
    const { user } = await getUser({ ensureSignedIn: true });
    const cookie = cookies().get(cookieName);
    const cookiePassword = process.env.WORKOS_COOKIE_PASSWORD;
    if (!cookie || !cookiePassword) {
        redirect("/");
    }

    const cookieData = await unsealData<Session>(cookie.value, {
        password: cookiePassword,
    });

    let userData: UserProfileResponse | null = null;
    try {
        const userDetails = await fetch(
            `${process.env.NEXT_PUBLIC_SUBSCRIPTION_SERVICE_URL}/v1/users/me`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${cookieData.accessToken}`,
                },
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
                    <div className="flex w-full max-w-screen-xl justify-between rounded bg-white p-6">
                        <div className="flex gap-4">
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
                                <h3 className="text-2xl font-bold">
                                    {user.firstName ?? "" + user.lastName ?? ""}
                                </h3>
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
                        <div className="flex w-full max-w-screen-xl flex-col gap-4 rounded bg-white p-6">
                            <div className="text-2xl">
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
            </div>
        </div>
    );
}
