import { User } from "@workos-inc/node";

type UpcomingInvoice = {
    freeUsage: number;
    overageUsage: number;
    estimatedUsage: number;
    amountDue: number;
    projectedAmount: number;
}

export type UserProfileResponse = {
    user: User;
    waitlistPosition: number;
    upcomingInvoice: UpcomingInvoice;
    billingPortal: string;
};
