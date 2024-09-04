import { User } from "@workos-inc/node";

export type SubscriptionStatus = "free" | "active" | "cancelled";
type InvoiceStatus =
    | "active"
    | "canceled"
    | "incomplete"
    | "incomplete_expired"
    | "past_due"
    | "paused"
    | "trialing"
    | "unpaid";

export type UpcomingInvoice = {
    amountDue: number;
    projectedAmount: number;
};

export const SubscriptionStatuses: Record<SubscriptionStatus, string> = {
    free: "Free tier",
    active: "Pro",
    cancelled: "Cancelled",
};

export const InvoiceStatuses: Record<InvoiceStatus, string> = {
    active: "Active",
    canceled: "Canceled",
    incomplete: "Incomplete",
    incomplete_expired: "Incomplete Expired",
    past_due: "Past Due",
    paused: "Paused",
    trialing: "Trialing",
    unpaid: "Unpaid",
};

export type UserProfileResponse = {
    user: User;
    waitlistPosition: number;
};

export type CurrentUsage = {
    freeUsage: number;
    overageUsage: number;
    estimatedUsage: number;
    limit: number;
};

export type SubscriptionResponse = {
    status: SubscriptionStatus;
    usage: CurrentUsage;
    invoiceStatus?: InvoiceStatus;
    upcomingInvoice?: UpcomingInvoice;
    billingPortal?: string;
};

export type CreateSubscriptionResponse = {
    checkoutSessionURL: string;
};
