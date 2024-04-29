"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { Button } from "@/components/button";

import { GuestIcon } from "@/assets/icons";

export const VisitorButton = () => {
  const router = useRouter();
  const { data, status } = useSession();

  const isAuthenticated = status === "authenticated";

  function handleAccessAsVisitor() {
    router.push("/home");
  }

  return (
    <Button onClick={handleAccessAsVisitor}>
      <GuestIcon />
      Entrar {!isAuthenticated ? "como visitante" : `como ${data?.user.name}`}
    </Button>
  );
};
