"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

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
} satisfies ChartConfig

type UsageProps = {
    date: string;
    freeUsage: number;
    overageUsage: number;
    estimatedUsage?: number;
}

export function Usage({ date, freeUsage, overageUsage, estimatedUsage }: UsageProps) {
    if (!estimatedUsage) {
        estimatedUsage = 10000;
    }

    const chartData = [
        { date, freeTier: freeUsage, overage: overageUsage, estimated: estimatedUsage },
    ];

    return (
        <ChartContainer config={chartConfig} className="h-20 w-full">
            <BarChart
                accessibilityLayer
                data={chartData}
                layout="vertical"
                barSize={24}
            >
                <CartesianGrid horizontal={false} />
                <XAxis
                    type="number"
                    axisLine={false}
                    tickFormatter={value => value.toLocaleString()}
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
                <ChartTooltip
                    content={<ChartTooltipContent />}
                    cursor={false}
                    defaultIndex={0}
                />
            </BarChart>
        </ChartContainer>
    )
}
