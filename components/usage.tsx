"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { CurrentUsage, UpcomingInvoice } from "@/types/api";

const chartConfig = {
    freeTier: {
        label: "Free Tier Usage",
        color: "hsl(var(--chart-1))",
    },
    overage: {
        label: "Current Usage",
        color: "hsl(var(--chart-2))",
    },
    estimated: {
        label: "Estimated",
        color: "hsl(var(--chart-3))",
    },
    limit: {
        label: "Limit",
        color: "hsl(var(--chart-3))",
    },
} satisfies ChartConfig;

type UsageProps = {
    usage: CurrentUsage;
};

export function Usage({ usage }: UsageProps) {
    const { freeUsage, overageUsage, estimatedUsage } = usage;
    const chartData = [
        {
            date: "Lines of code",
            freeTier: freeUsage,
            overage: overageUsage,
            estimated: estimatedUsage,
            limit: 4000,
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
                    ticks={[1000, 4000]}
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
