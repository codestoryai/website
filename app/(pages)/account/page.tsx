import { getUser } from "@workos-inc/authkit-nextjs";

export default async function AccountPage() {
    const { user } = await getUser({ ensureSignedIn: true });

    const userFields = [
        ["First name", user.firstName],
        ["Last name", user.lastName],
        ["Email", user.email]
    ].filter((arr) => arr.length > 0);

    return (
        <>
            <div className="p-8 md:p-12 pt-20 md:pt-24 bg-noise bg-background">
                <div className="max-w-screen-xl m-auto">
                    <div className="my-12 flex flex-col items-center">
                        <h2 className="pt-4 text-3xl md:text-5xl font-bold text-center">
                            Your account
                        </h2>
                        <h3 className="text-xl text-primary text-center">Manage your account and billing information</h3>
                    </div>
                </div>
            </div>
            <div className="p-8 md:p-12 pt-20 md:pt-24 bg-white">
                <div className="max-w-screen-xl m-auto">
                    {userFields && (
                        <div className="flex flex-col items-center gap-3 w-96">
                            {userFields.map(([label, value]) => (
                                <div className="flex items-center gap-6 w-full" key={value}>
                                    <label>
                                        <span className="font-bold w-24 inline-block">{label}</span>

                                        <div className="flex-grow">
                                            <input
                                                type="text"
                                                value={value || ""}
                                                readOnly
                                                className="w-full border border-gray-300 rounded-md px-2 py-1"
                                            />
                                        </div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
