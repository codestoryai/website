"use server";

import { signOut as authSignOut } from "@workos-inc/authkit-nextjs";

export default async function signOut() {
    await authSignOut();
}
