import { WorkOS } from "@workos-inc/node";
import { NextRequest as Request, NextResponse as Response } from "next/server";

const workos = new WorkOS(process.env.WORKOS_API_KEY);
const clientId = process.env.WORKOS_CLIENT_ID;

export const GET = async (request: Request) => {
    const queryParams = request.nextUrl.searchParams;
    const state = queryParams.get('state');
    if (!clientId || !state) {
        return Response.json({ error: "Missing required parameters" });
    }

    const authorizationUrl = workos.userManagement.getAuthorizationUrl({
        clientId,
        redirectUri: 'http://localhost:3000/redirect',
        state,
        provider: 'authkit'
    });
    return Response.json({ authorizationUrl });
}
