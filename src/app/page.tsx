import { redirect } from "next/navigation";

import { serverSession } from "@/lib/auth/get-server-session";

export default async function Page() {
  const session = await serverSession();

  if (session) {
    redirect("/home");
  } else {
    redirect("/sign-in");
  }
}
