import { User } from "@workos-inc/node";

export type SubscriptionStatus =
    | "free"
    | "pending_activation"
    | "active"
    | "pending_cancellation"
    | "cancelled";
type InvoiceStatus =
    | "active"
    | "canceled"
    | "incomplete"
    | "incomplete_expired"
    | "past_due"
    | "paused"
    | "trialing"
    | "unpaid";

export const SubscriptionStatuses: Record<SubscriptionStatus, string> = {
    free: "Free tier",
    pending_activation: "Exhausted free tier",
    active: "Pro",
    pending_cancellation: "Pro",
    cancelled: "Cancelled",
};

export const isCurrentlySubscribed = (status: SubscriptionStatus): boolean => {
    return status === "active" || status === "pending_cancellation";
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
    breakdown: Record<string, number>;
};

export type SubscriptionResponse = {
    status: SubscriptionStatus;
    usage: CurrentUsage;
    invoiceStatus?: InvoiceStatus;
    subscriptionEnding?: number;
};

export type CreateSubscriptionResponse = {
    checkoutSessionURL: string;
};
