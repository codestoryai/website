"use client";

import { redirect, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function AuthenticationPage() {
    const searchParams = useSearchParams();
    const state = searchParams.get('state');
    if (!state) {
        redirect('/');
    }

    const [_, setValue] = useLocalStorage('stateId', '');
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
                    redirect('/');
                }
            });
        }
    }, [setValue, state]);

    return (
        <>
            <div className="p-8 md:p-12 pt-20 md:pt-24 bg-noise bg-background">
                <div className="max-w-screen-xl m-auto">
                    <div className="my-12 flex flex-col items-center">
                        <h2 className="pt-4 text-3xl md:text-5xl font-bold text-center">
                            Signing in to the editor
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}
