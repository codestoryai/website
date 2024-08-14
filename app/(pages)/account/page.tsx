import Image from "next/image";
import { getUser } from "@workos-inc/authkit-nextjs";

export default async function AccountPage() {
    const { user } = await getUser({ ensureSignedIn: true });

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
            <div className="flex flex-col gap-8">
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
                                <p className="text-gray-500">{user.email}</p>
                            </div>
                        </div>
                        {/* <Button className="self-center" size="sm" variant="default">
                            <div className="flex items-center">
                                <p className="text-xl">
                                    Manage subscription
                                </p>
                            </div>
                        </Button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
