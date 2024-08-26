"use client";

import { Button } from "@/components/ui/button";
import signOut from "@/lib/signout";

export default function SignOut() {
    return (
        <Button className="self-center py-0" variant="ghost" onClick={() => signOut()}>
            <div className="flex items-center">
                <p className="text-base md:text-xl">
                    Sign out
                </p>
            </div>
        </Button>
    );
}
