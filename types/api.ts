import { User } from "@workos-inc/node";

type UpcomingInvoice = {
    freeUsage: number;
    overageUsage: number;
    amountDue: number;
}

export type UserProfileResponse = {
    user: User;
    waitlistPosition: number;
    upcomingInvoice: UpcomingInvoice;
    billingPortal: string;
};
