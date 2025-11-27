"use client";

import { CodeExampleSection } from "@/components/CodeExampleSection";
import MainLandingSection from "@/components/MainLandingSection";
import { SubscriptionPricesCard } from "@/components/SubscriptionPricesCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center mt-8" id="opening">
      <MainLandingSection />
      <CodeExampleSection />
      <SubscriptionPricesCard />
    </div>
  );
}
