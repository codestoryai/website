"use client"

import { CheckCircle2 } from "lucide-react"
import React, { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

type PricingSwitchProps = {
    onSwitch: (value: string) => void
}

const PricingSwitch = ({ onSwitch }: PricingSwitchProps) => (
    <Tabs defaultValue="0" className="w-40 mx-auto my-6" onValueChange={onSwitch}>
        <TabsList className="py-6 px-2 bg-muted/40">
            <TabsTrigger value="0" className="text-base">
                Monthly
            </TabsTrigger>
            <TabsTrigger value="1" className="text-base">
                Yearly
            </TabsTrigger>
        </TabsList>
    </Tabs>
)

const CheckItem = ({ text }: { text: string }) => (
    <div className="flex items-center gap-2 mb-2">
        <CheckCircle2 size={20} className="text-green-500" />
        <p className="text-zinc-700 dark:text-zinc-300 font-medium">{text}</p>
    </div>
)

export function PricingWidget() {
    const [value, setValue] = useState(10000);
    const [isYearly, setIsYearly] = useState(false)
    const togglePricingPeriod = (value: string) => setIsYearly(parseInt(value) === 1)

    return (
        <div>
            <section className="text-center">
                <h2 className="text-3xl font-bold">Plans</h2>
            </section>
            <PricingSwitch onSwitch={togglePricingPeriod} />
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="w-72 flex flex-col justify-between mx-auto sm:mx-0">
                    <div>
                        <CardHeader className="pb-4 pt-4">
                            <CardTitle className="text-zinc-700 dark:text-zinc-300 text-xl">Free</CardTitle>
                            <div className="flex gap-0.5 pb-4">
                                <h3 className="text-4xl font-bold">$0</h3>
                                <span className="flex flex-col justify-end mb-1">{isYearly ? "/year" : "/month"}</span>
                            </div>
                            <Separator />
                            <div className="py-[15px]">
                                <CardDescription className="pt-1.5 text-base">
                                    Upto 2,000 lines of code / mo
                                </CardDescription>
                                <CardDescription className="pt-1.5 text-base">
                                    Upto 10 chat conversations / mo
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
                <Card className="w-72 flex flex-col justify-between mx-auto sm:mx-0">
                    <div>
                        <CardHeader className="pb-4 pt-4">
                            {isYearly ? (
                                <div className="flex justify-between">
                                    <CardTitle className="text-zinc-700 dark:text-zinc-300 text-xl">Pro</CardTitle>
                                    <Badge className="bg-green-100 text-green-800">Save $40</Badge>
                                </div>
                            ) : (
                                <CardTitle className="text-zinc-700 dark:text-zinc-300 text-xl">Pro</CardTitle>
                            )}
                            <div className="flex gap-0.5 pb-4">
                                <h3 className="text-4xl font-bold">{isYearly ? "$200" : "$20"}</h3>
                                <span className="flex flex-col justify-end mb-1">{isYearly ? "/year" : "/month"}</span>
                            </div>
                            <Separator />
                            <Slider
                                className="pt-4"
                                value={[value]}
                                onValueChange={(value) => setValue(value[0])}
                                min={5000}
                                max={100000}
                                step={5000}
                            />
                            <div>
                                <CardDescription className="pt-1.5 text-base">
                                    {value.toLocaleString()} lines of code / mo
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
                            Change plan to {isYearly ? "$200/year" : "$20/mo"}
                        </Button>
                    </CardFooter>
                </Card>
            </section>
        </div>
    )
}
