export const formatDateTime = (timestamp: string): string => {
    // Convert time from format '2023-08-20T05:00:00.000Z' to 'Feb. 29, 2024'
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
};

export const formatUnixTimestamp = (timestamp: number): string => {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    return new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
    }).format(date);
};
