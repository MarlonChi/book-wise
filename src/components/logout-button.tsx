"use client";

import { SignOut } from "@phosphor-icons/react/dist/ssr";

import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

export function LogoutButton() {
  const { data } = useSession();

  async function handleSignOut() {
    await signOut({
      redirect: true,
      callbackUrl: "/",
    });
  }

  if (!data) return null;

  return (
    <button
      className="flex items-center gap-3 bg-transparent max-2xl:gap-2"
      onClick={handleSignOut}
    >
      <Image
        src={data?.user.image ?? ""}
        alt=""
        width={60}
        height={60}
        className="h-8 w-8 rounded-full max-lg:hidden"
      />
      <span className="line-clamp-1 max-lg:hidden">{data?.user.name}</span>
      <SignOut className="text-red-500 text-2xl" />
    </button>
  );
}
