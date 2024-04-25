"use client";

import { Button } from "@/components/button";
import { GoogleIcon } from "@/assets/icons";
import { signIn } from "next-auth/react";

export const GoogleAuthButton = () => {
  return (
    <Button onClick={() => signIn("google", { callbackUrl: "/home" })}>
      <GoogleIcon />
      Entrar com Google
    </Button>
  );
};
