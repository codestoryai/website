"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { UpcomingInvoice } from "@/types/api";

const chartConfig = {
    freeTier: {
        label: "Free Tier",
        color: "hsl(var(--chart-1))",
    },
    overage: {
        label: "Current",
        color: "hsl(var(--chart-2))",
    },
    estimated: {
        label: "Estimated",
        color: "hsl(var(--chart-3))",
    },
    limit: {
        label: "Limit",
        color: "hsl(var(--chart-4))",
    },
} satisfies ChartConfig;

type UsageProps = {
    upcomingInvoice: UpcomingInvoice;
};

export function Usage({ upcomingInvoice }: UsageProps) {
    const { freeUsage, overageUsage, estimatedUsage } = upcomingInvoice;
    const chartData = [
        {
            date: "Lines of code",
            freeTier: freeUsage,
            overage: overageUsage,
            estimated: estimatedUsage,
            limit: 3000,
        },
    ];

    return (
        <ChartContainer config={chartConfig} className="h-20 w-full">
            <BarChart
                accessibilityLayer
                data={chartData}
                layout="vertical"
                barSize={24}
            >
                <XAxis
                    type="number"
                    axisLine={false}
                    ticks={[5000, 60000, 656385]}
                    tickFormatter={(value) => value.toLocaleString()}
                />
                <YAxis
                    dataKey="date"
                    type="category"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    hide
                />
                <Bar
                    dataKey="freeTier"
                    stackId="a"
                    fill="var(--color-freeTier)"
                />
                <Bar
                    dataKey="overage"
                    stackId="a"
                    fill="var(--color-overage)"
                />
                <Bar
                    dataKey="estimated"
                    stackId="a"
                    fill="var(--color-estimated)"
                />
                <Bar dataKey="limit" stackId="a" fill="var(--color-limit)" />
                <ChartTooltip
                    content={
                        <ChartTooltipContent
                            indicator="line"
                            className="w-[180px] border border-gray-200 bg-white"
                        />
                    }
                    cursor={false}
                />
            </BarChart>
        </ChartContainer>
    );
}
