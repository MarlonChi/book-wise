"use client";

import { Button } from "@/components/button";
import { GitHubIcon } from "@/assets/icons";

import { useSearchParams } from "next/navigation";
import { signIn, SignInOptions, useSession } from "next-auth/react";

import { env } from "@/env";

interface GithubAuthButtonProps {
  signInOptions?: SignInOptions;
}

export const GithubAuthButton = ({ signInOptions }: GithubAuthButtonProps) => {
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
    await signIn("github", options);
  }
  return (
    <Button onClick={handleSignIn} disabled={disabled}>
      <GitHubIcon />
      Entrar com GitHub
    </Button>
  );
};
