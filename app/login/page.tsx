import OAuthButtons from "@/components/oauth-buttons";
import { AuroraText } from "@/components/ui/aurora-text";
import { MagicCard } from "@/components/ui/magic-card";

export default function SignIn() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <MagicCard className="rounded-2xl flex justify-center p-8 pl-16 pr-16">
        <AuroraText className="font-bold text-7xl text-center">
          Sign In
        </AuroraText>
        <OAuthButtons />
      </MagicCard>
    </div>
  );
}
