"use client"

import { Button } from "./ui/button";
import Link from "next/link";
import { RainbowButton } from "./ui/rainbow-button";

export function NavigationBar() {
    return (
        <div className="flex w-full p-2 sticky top-0 z-50 bg-slate-200 dark:bg-gray-950 pl-4 lr-4">
            <div className="flex gap-4 items-center flex-6">
                <Link href="/" className="text-4xl text-center font-bold hover:text-gray-300">Simply Safer</Link>
                <Link href={"/docs"} className="font-semibold text-center">Docs</Link>
            </div>
            <div className="flex-3 flex gap-4 items-center justify-end">
                <Button variant={"outline"}><Link href="/login">Login</Link></Button>
                <RainbowButton><Link href="/register">Register</Link></RainbowButton>
            </div>
        </div>
    )
}


