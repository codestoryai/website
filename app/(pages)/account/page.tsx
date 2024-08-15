import { getUser } from "@workos-inc/authkit-nextjs";
import { unsealData } from "iron-session";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

import SignOut from "@/components/signout";
import { UserProfileResponse } from "@/types/api";

const cookieName = 'wos-session';
export default async function AccountPage() {
    const { user } = await getUser({ ensureSignedIn: true });
    const cookie = cookies().get(cookieName);
    const cookiePassword = process.env.WORKOS_COOKIE_PASSWORD;
    if (!cookie || !cookiePassword) {
        redirect("/")
    }

    const cookieData = await unsealData<Session>(cookie.value, {
        password: cookiePassword
    });

    let userData: UserProfileResponse | null = null;
    try {
        const userDetails = await fetch(
            `${process.env.NEXT_PUBLIC_SUBSCRIPTION_SERVICE_URL}/v1/users/me`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookieData.accessToken}`
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
            </div>
        </div>
    );
}
