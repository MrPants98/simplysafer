import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
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
      <Image
        src={!session.user.image ? "" : session.user.image}
        alt="User Avatar"
        width={100}
        height={100}
      />
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
