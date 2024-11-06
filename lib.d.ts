declare module "@fec/remark-a11y-emoji";

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

interface Impersonator {
    email: string;
    reason: string | null;
}

interface User {
    object: "user";
    id: string;
    email: string;
    emailVerified: boolean;
    profilePictureUrl: string | null;
    firstName: string | null;
    lastName: string | null;
    createdAt: string;
    updatedAt: string;
}

interface Session {
    accessToken: string;
    refreshToken: string;
    user: User;
    impersonator?: Impersonator;
}
