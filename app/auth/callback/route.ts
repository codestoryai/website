import { unsealData } from "iron-session";
import { handleAuth } from "@workos-inc/authkit-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const cookieName = "wos-session";
export async function GET(request: NextRequest) {
    // Let the WorkOS SDK handle the callback
    const response = await handleAuth({ returnPathname: "/account" })(request);

    // If the user is authenticated, get the session data from the cookie
    const cookie = cookies().get(cookieName);
    const cookiePassword = process.env.WORKOS_COOKIE_PASSWORD;
    if (!cookie || !cookiePassword) {
        return NextResponse.json(
            {
                error: {
                    message: "Something went wrong",
                    description:
                        "Couldn’t sign in. If you are not sure what happened, please contact your organization admin.",
                },
            },
            { status: 500 }
        );
    }
    const data = await unsealData<Session>(cookie.value, {
        password: cookiePassword,
    });

    try {
        // Make a request to the backend to create the user
        const createUserResponse = await fetch(
            `${process.env.NEXT_PUBLIC_SUBSCRIPTION_SERVICE_URL}/v1/users`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${data.accessToken}`,
                },
            }
        );

        if (!createUserResponse.ok) {
            return NextResponse.json(
                {
                    error: {
                        message: "Failed to create user",
                        description:
                            "The user could not be created. Please try again.",
                    },
                },
                { status: 500 }
            );
        }

        await createUserResponse.json();
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json(
            {
                error: {
                    message: "Failed to create user",
                    description: error,
                },
            },
            { status: 500 }
        );
    }

    return response;
}
