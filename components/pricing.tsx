"use client";

import { CheckCircle2 } from "lucide-react";
import React, { useState } from "react";

import SparklesText from "@/components/magicui/sparkles-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type PricingSwitchProps = {
    isYearly: boolean;
    onSwitch: (value: string) => void;
};

const PricingSwitch = ({ isYearly, onSwitch }: PricingSwitchProps) => (
    <Tabs
        defaultValue="0"
        className="mx-auto my-6 w-40"
        onValueChange={onSwitch}
    >
        <TabsList className="bg-muted/40 px-2 py-6">
            <TabsTrigger value="0" className="text-base">
                Monthly
            </TabsTrigger>
            <TabsTrigger value="1" className="text-base">
                {isYearly ? (
                    "Yearly"
                ) : (
                    <SparklesText
                        text="Yearly"
                        className="text-base"
                        sparklesCount={5}
                    />
                )}
            </TabsTrigger>
        </TabsList>
    </Tabs>
);

const CheckItem = ({ text }: { text: string }) => (
    <div className="mb-2 flex items-center gap-2">
        <CheckCircle2 size={20} className="text-green-500" />
        <p className="font-medium text-zinc-700">{text}</p>
    </div>
);

export function PricingWidget() {
    const [value, setValue] = useState(4000);
    const [isYearly, setIsYearly] = useState(false);
    const togglePricingPeriod = (value: string) =>
        setIsYearly(parseInt(value) === 1);

    const calculatePrice = () => {
        const monthlyBasePrice = 20;
        const additionalLines = Math.max(0, value - 4000);
        const additionalCost = Math.ceil(additionalLines / 500) * 5;
        const totalCost = monthlyBasePrice + additionalCost;
        const discountedCost = isYearly ? totalCost * 12 * 0.8 : totalCost;
        const savings = isYearly ? totalCost * 12 * 0.2 : 0;

        return { price: discountedCost, savings };
    };

    return (
        <div>
            <section className="text-center">
                <h2 className="text-3xl font-bold">Plans</h2>
            </section>
            <PricingSwitch isYearly={isYearly} onSwitch={togglePricingPeriod} />
            <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Card className="mx-auto flex w-72 flex-col justify-between sm:mx-0">
                    <div>
                        <CardHeader className="pb-4">
                            <CardTitle className="text-xl text-zinc-700">
                                Free
                            </CardTitle>
                            <div className="flex gap-0.5 pb-4">
                                <h3 className="text-4xl font-bold">$0</h3>
                                <span className="mb-1 flex flex-col justify-end">
                                    {isYearly ? "/year" : "/month"}
                                </span>
                            </div>
                            <Separator />
                            <div className="py-[15px]">
                                <CardDescription className="pt-1.5 text-base">
                                    Upto 1,000 lines of code/month
                                </CardDescription>
                                <CardDescription className="pt-1.5 text-base">
                                    Upto 10 chat conversations/month
                                </CardDescription>
                            </div>
                            <div className="pt-[2px]" />
                            <Separator />
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2">
                            <CheckItem text="Discord community support" />
                        </CardContent>
                    </div>
                </Card>
                <Card className="mx-auto flex w-72 flex-col justify-between sm:mx-0">
                    <div>
                        <CardHeader className="pb-4">
                            {isYearly ? (
                                <div className="flex justify-between">
                                    <CardTitle className="text-xl text-zinc-700">
                                        Pro
                                    </CardTitle>
                                    <Badge className="bg-green-100 text-green-800">
                                        Save ${calculatePrice().savings}
                                    </Badge>
                                </div>
                            ) : (
                                <CardTitle className="text-xl text-zinc-700">
                                    Pro
                                </CardTitle>
                            )}
                            <div className="flex gap-0.5 pb-4">
                                <h3 className="text-4xl font-bold">
                                    ${calculatePrice().price}
                                </h3>
                                <span className="mb-1 flex flex-col justify-end">
                                    {isYearly ? "/year" : "/month"}
                                </span>
                            </div>
                            <Separator />
                            <Slider
                                className="pt-4"
                                value={[value]}
                                onValueChange={(value) => setValue(value[0])}
                                min={2000}
                                max={20000}
                                step={500}
                            />
                            <div>
                                <CardDescription className="pt-1.5 text-base">
                                    {value.toLocaleString()} lines of code /
                                    month
                                </CardDescription>
                                <CardDescription className="pt-1.5 text-base">
                                    Unlimited chat conversations
                                </CardDescription>
                            </div>
                            <div className="pt-[2px]" />
                            <Separator />
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2">
                            <CheckItem text="Priority Slack/email support" />
                        </CardContent>
                    </div>
                    <CardFooter className="mt-2">
                        <Button size="sm" className="w-full">
                            Change plan to ${calculatePrice().price}
                            {isYearly ? "/year" : "/month"}
                        </Button>
                    </CardFooter>
                </Card>
            </section>
        </div>
    );
}
