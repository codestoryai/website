import { unsealData } from "iron-session";
import { handleAuth, signOut } from "@workos-inc/authkit-nextjs";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { redirect } from "next/navigation";

const cookieName = 'wos-session';
export async function GET(request: NextRequest) {
    // Let the WorkOS SDK handle the callback
    const authResponse = await handleAuth({ returnPathname: "/account" })(request);

    // If the user is authenticated, get the session data from the cookie
    const cookie = cookies().get(cookieName);
    const cookiePassword = process.env.WORKOS_COOKIE_PASSWORD;
    if (!cookie || !cookiePassword) {
        signOut();
        redirect('/');
    }

    const data = await unsealData<Session>(cookie.value, {
        password: cookiePassword
    });

    try {
        // Make a request to the backend to create the user
        const createUserResponse = await fetch(
            `${process.env.NEXT_PUBLIC_SUBSCRIPTION_SERVICE_URL}/v1/users`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${data.accessToken}`
                }
            }
        );

        if (!createUserResponse.ok) {
            signOut();
            redirect('/');
        }

        const createUserData = await createUserResponse.json();
        console.log('User created successfully:', createUserData);
    } catch (error) {
        signOut();
        redirect('/');
    }

    return authResponse;
}
