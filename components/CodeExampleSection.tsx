import { CodeBlock, dracula } from "react-code-blocks";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

export function CodeExampleSection() {
    return (
        <Card className="w-[900px] relative overflow-hidden" style={{marginTop: "8rem", marginBottom: "8rem"}}>
            <CardHeader>
                <CardTitle className="text-4xl font-bold">Code Example</CardTitle>
                <CardDescription>It really is as simple as it seems</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex gap-4">
                    <div className="flex-1">
                        <ol>
                            <p>1. Add the Simply Safer SDK to your project</p>
                            <p>2. Create the Simply Safer object with your API Key</p>
                            <p>2. Create the Simply Safer object with your API Key</p>
                            <p>4. Use the data however you want</p>
                        </ol>
                    </div>
                    <div className="flex-none">
                        <CodeBlock text={codeString} language={"js"} showLineNumbers startingLineNumber={1} theme={dracula} />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-center items-center">
                <Button><Link href="/docs">Learn More</Link></Button>
            </CardFooter>
        </Card>
    );
}

const codeString: string = `import { createSimplySafer } from "simply-safer";

const simplySafer = createSimplySafer(API_KEY);
const result = await simplySafer.scan("I hate you. Kill yourself");

console.log(result.isToxic); // Returns true`;
