"use client"

import Link from "next/link";
import { AuroraText } from "./ui/aurora-text";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { ShineBorder } from "./ui/shine-border";
import { SubscriptionCard } from "./ui/subscription-card";
import { ChevronRight } from "lucide-react";

export function SubscriptionPricesCard() {
    return (
        
        <Card className="mt-16 relative w-[900px]">
            <ShineBorder shineColor={["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]} />
            <CardHeader>
                <CardDescription className="text-center text-lg">Pricing</CardDescription>
                <CardTitle className="text-center font-bold text-4xl">Choose What is Right for <AuroraText className="text-5xl">You</AuroraText></CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-center gap-4 h-full">
                    <SubscriptionCard tier="Basic"/>
                    <SubscriptionCard tier="Premium" highlighted />
                    <SubscriptionCard tier="Advanced" />
                </div>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Link href={"/docs"}><Button size={"lg"}>Compare Tiers<ChevronRight></ChevronRight></Button></Link>
            </CardFooter>
        </Card>
    )
}