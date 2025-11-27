import { signIn } from "@/auth";
import { AuroraText } from "@/components/ui/aurora-text";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/ui/magic-card";
import { GithubIcon } from "lucide-react";

export default function SignIn() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <MagicCard className="rounded-2xl flex justify-center p-8 pl-16 pr-16">
        <AuroraText className="font-bold text-7xl text-center">
          Sign In
        </AuroraText>
        <div
          className="flex justify-center items-center"
          style={{ marginTop: "2rem" }}
        >
          <Button
            onClick={async () => {
              "use server";
              await signIn("github", { redirectTo: "/dashboard" });
            }}
          >
            <GithubIcon />
            Sign In with GitHub
          </Button>
        </div>
      </MagicCard>
    </div>
  );
}
