import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

async function Dashboard() {
  const session = await auth();

  if (!session?.user) {
    console.error("You are not signed in!");
    redirect("/login");
  }

  return (
    <>
      <h1>{session.user.name}</h1>
      <Button
        onClick={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        Sign Out
      </Button>
    </>
  );
}

export default Dashboard;
