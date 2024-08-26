import { User } from "@workos-inc/node";

export type SubscriptionStatus = "free" | "active" | "cancelled";
type InvoiceStatus = "active" | "canceled" | "incomplete" | "incomplete_expired" | "past_due" | "paused" | "trialing" | "unpaid";
export type UpcomingInvoice = {
    freeUsage: number;
    overageUsage: number;
    estimatedUsage: number;
    amountDue: number;
    projectedAmount: number;
}

export const SubscriptionStatuses: Record<SubscriptionStatus, string> = {
    "free": "Free tier",
    "active": "Active",
    "cancelled": "Cancelled",
};

export const InvoiceStatuses: Record<InvoiceStatus, string> = {
    "active": "Active",
    "canceled": "Canceled",
    "incomplete": "Incomplete",
    "incomplete_expired": "Incomplete Expired",
    "past_due": "Past Due",
    "paused": "Paused",
    "trialing": "Trialing",
    "unpaid": "Unpaid",
};

export type UserProfileResponse = {
    user: User;
    waitlistPosition: number;
    subscriptionStatus: SubscriptionStatus;
    invoiceStatus: InvoiceStatus;
    upcomingInvoice: UpcomingInvoice;
    billingPortal: string;
};
