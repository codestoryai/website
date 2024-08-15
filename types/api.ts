import { User } from "@workos-inc/node";

export type UserProfileResponse = {
    user: User;
    waitlistPosition: number;
};
