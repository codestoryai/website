"use client";

import { redirect, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function AuthenticationPage() {
    const searchParams = useSearchParams();
    const state = searchParams.get("state");
    if (!state) {
        redirect("/");
    }

    const [_, setValue] = useLocalStorage("stateId", "");
    const stateRef = useRef<string | null>(null);

    useEffect(() => {
        if (!stateRef.current) {
            stateRef.current = state;
            setValue(state);

            fetch(`/auth/editor?state=${state}`).then(async (res) => {
                if (res.ok) {
                    const data = await res.json();
                    window.location.assign(data.authorizationUrl);
                } else {
                    redirect("/");
                }
            });
        }
    }, [setValue, state]);

    return (
        <>
            <div className="flex min-h-screen flex-col bg-background bg-noise p-8 pt-20 md:p-12 md:pt-24">
                <div className="m-auto flex max-w-screen-xl flex-1 items-center justify-center">
                    <h2 className="pt-4 text-center text-3xl font-bold md:text-5xl">
                        Signing in to the editor
                    </h2>
                </div>
            </div>
        </>
    );
}
