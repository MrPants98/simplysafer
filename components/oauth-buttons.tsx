import { signIn } from "@/auth";
import { Button } from "./ui/button";
import { GithubIcon } from "lucide-react";
import { SiGoogle } from "@icons-pack/react-simple-icons";

function OAuthButtons() {
    return ( 
        <div
            className="flex justify-center items-center flex-col gap-2"
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
        <Button
            onClick={async () => {
            "use server";
            await signIn("google", { redirectTo: "/dashboard" });
            }}
        >
            <SiGoogle />
            Sign In with Google
        </Button>
        </div> 
    );
}

export default OAuthButtons;