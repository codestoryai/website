"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function RedirectPage() {
    const router = useRouter();
    const pathname = usePathname();
    const [stateId, _, removeStateId] = useLocalStorage('stateId', '')
    const searchParams = useSearchParams();

    const authorizationCode = searchParams.get('code');
    const state = searchParams.get('state');
    router.push(pathname);

    useEffect(() => {
        if (stateId === state && authorizationCode && window.location) {
            removeStateId();
            fetch(`${process.env.NEXT_PUBLIC_SUBSCRIPTION_SERVICE_URL}/v1/auth/editor?code=${authorizationCode}`).then(async (res) => {
                if (res.ok) {
                    const { redirectURL } = await res.json();
                    window.location.assign(redirectURL);
                }
            });
        }
    }, [authorizationCode, removeStateId, state, stateId]);

    return (
        <>
            <div className="p-8 md:p-12 pt-20 md:pt-24 bg-noise bg-background">
                <div className="max-w-screen-xl m-auto">
                    <div className="my-12 flex flex-col items-center">
                        <h2 className="pt-4 text-3xl md:text-5xl font-bold text-center">
                            Successfully authenticated!
                        </h2>
                    </div>
                </div>
            </div>
            <div className="p-8 md:p-12 pt-20 md:pt-24 bg-white">
                <div className="max-w-screen-xl m-auto">
                    <h3 className="text-xl text-primary text-center">You can now go back to Aide!</h3>
                </div>
            </div>
        </>
    );
}
