import Link from "next/link";
import { BorderBeam } from "./border-beam";
import { Button } from "./button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";

export function SubscriptionCard(props: SubscriptionPriceProps) {
    const priceMap = {
        Basic: "Free",
        Premium: "$24.99 / month",
        Advanced: "$99.99 / month"
    }

    const tier: TierInfo = tiersMap[props.tier];

    return (
        <Card 
            style={{flex: props.highlighted ? 1.2 : 1}}
            className={`min-w-[200px] relative overflow-hidden`}>
            <CardHeader className="text-center">
                <CardTitle className={`font-bold text-${props.highlighted ? 3 : 2}xl`} text-2xl>{props.tier}</CardTitle>
                <CardDescription>{`${priceMap[props.tier]}`}</CardDescription>
            </CardHeader>
            <CardContent>
                <ul>
                    <p>{tier.monthlyRequests.toLocaleString()} requests / month</p>
                    <p>{tier.rpm.toLocaleString()} requests / min</p>
                    <p>{tier.rps.toLocaleString()} requests / second</p>
                    <p>Model: {tier.model}</p>
                    <p>Catagories Detected: {tier.categoriesDetected}</p>
                    <p>Context Size: {tier.contextWindow} tokens</p>
                    <p>Explanation Level: {tier.explanationLevel}</p>
                </ul>
            </CardContent>
            <CardFooter className="flex items-center justify-center">
                <Button><Link href={"/register"}>Subscribe</Link></Button>
            </CardFooter>
            {props.highlighted ? <BorderBeam duration={4} size={400} className="from-transparent via-green-500 to-transparent"/> : null}
            {props.highlighted ? <BorderBeam duration={4} delay={2} size={400} className="from-transparent via-green-500 to-transparent"/> : null}
        </Card>
    );
}
interface SubscriptionPriceProps {
    tier: Tier,
    highlighted?: boolean
}

type Tier = "Basic" | "Premium" | "Advanced";

interface TierInfo {
    monthlyRequests: number;
    rpm: number;
    rps: number;
    maxTextLength: number;
    batchSize: number;
    model: string;
    categoriesDetected: number;
    contextWindow: number;
    explanationLevel: "None" | "Short" | "Full";
}

const tiersMap: Record<Tier, TierInfo> = {
    Basic: {
        monthlyRequests: 3000,
        rpm: 5,
        rps: 1,
        maxTextLength: 1000,
        batchSize: 1,
        model: "toxicity-small",
        categoriesDetected: 3,
        contextWindow: 256,
        explanationLevel: "None"
    },
    Premium: {
        monthlyRequests: 100000,
        rpm: 30,
        rps: 3,
        maxTextLength: 4000,
        batchSize: 10,
        model: "toxicity-medium",
        categoriesDetected: 6,
        contextWindow: 2000,
        explanationLevel: "Short"
    },
    Advanced: {
        monthlyRequests: 500000,
        rpm: 150,
        rps: 15,
        maxTextLength: 16000,
        batchSize: 50,
        model: "toxicity-large",
        categoriesDetected: 15,
        contextWindow: 8000,
        explanationLevel: "Full"
    }
};