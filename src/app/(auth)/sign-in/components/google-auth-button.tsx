"use client";

import { SignInOptions, signIn, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

import { env } from "@/env";
import { Button } from "@/components/button";
import { GoogleIcon } from "@/assets/icons";

interface GoogleAuthButtonProps {
  signInOptions?: SignInOptions;
}

export const GoogleAuthButton = ({ signInOptions }: GoogleAuthButtonProps) => {
  const { status } = useSession();
  const searchParams = useSearchParams();

  const basePath = env.NEXT_PUBLIC_API_BASE_URL;

  const callbackUrlPath = searchParams.get("callbackUrl");
  const callbackUrl = callbackUrlPath
    ? new URL(callbackUrlPath, basePath).toString()
    : undefined;

  const options: SignInOptions = signInOptions ?? {
    callbackUrl: callbackUrl || "/home",
    redirect: true,
  };

  const disabled = ["loading", "authenticated"].includes(status);

  async function handleSignIn() {
    await signIn("google", options);
  }

  return (
    <Button onClick={handleSignIn} disabled={disabled}>
      <GoogleIcon />
      Entrar com Google
    </Button>
  );
};
