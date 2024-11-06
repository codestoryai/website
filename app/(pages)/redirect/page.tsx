"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function RedirectPage() {
    const router = useRouter();
    const pathname = usePathname();
    const [stateId, _, removeStateId] = useLocalStorage("stateId", "");
    const searchParams = useSearchParams();

    const authorizationCode = searchParams.get("code");
    const state = searchParams.get("state");
    router.push(pathname);

    useEffect(() => {
        if (
            stateId === state &&
            authorizationCode &&
            typeof window !== "undefined"
        ) {
            removeStateId();
            fetch(
                `${process.env.NEXT_PUBLIC_SUBSCRIPTION_SERVICE_URL}/v1/auth/editor?code=${authorizationCode}`
            ).then(async (res) => {
                if (res.ok) {
                    const { redirectURL } = await res.json();
                    window.location.assign(redirectURL);
                }
            });
        }
    }, [authorizationCode, removeStateId, state, stateId]);

    return (
        <div className="min-h-screen bg-background bg-noise p-8 pt-20 md:p-12 md:pt-24">
            <div className="m-auto max-w-screen-xl">
                <div className="my-12 flex flex-col items-center">
                    <h2 className="pt-4 text-center text-3xl font-bold md:text-5xl">
                        Successfully authenticated!
                    </h2>
                </div>
            </div>
            <div className="bg-white p-12">
                <div className="m-auto max-w-screen-xl">
                    <h3 className="text-center text-xl text-primary">
                        You can now go back to Aide!
                    </h3>
                </div>
            </div>
        </div>
    );
}
