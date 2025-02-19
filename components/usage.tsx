"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { CurrentUsage } from "@/types/api";

const chartConfig = {
    freeTier: {
        label: "Free Tier",
        color: "#4f46e5",
    },
    overage: {
        label: "Pro Tier",
        color: "#6366f1",
    },
    estimated: {
        label: "Estimated",
        color: "#818cf8",
    },
} satisfies ChartConfig;

type UsageProps = {
    usage: CurrentUsage;
};

export function Usage({ usage }: UsageProps) {
    const { freeUsage, overageUsage, estimatedUsage } = usage;
    const chartData = [
        {
            date: "Invocations",
            freeTier: freeUsage,
            overage: overageUsage,
            estimated: estimatedUsage,
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
                    ticks={[50]}
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
                    fill="#4f46e5"
                />
                <Bar
                    dataKey="overage"
                    stackId="a"
                    fill="#6366f1"
                />
                <Bar
                    dataKey="estimated"
                    stackId="a"
                    fill="#818cf8"
                />
                <Bar dataKey="limit" stackId="a" fill="#94a3b8" />
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