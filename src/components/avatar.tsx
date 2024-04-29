"use client";

import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { merge } from "@/utils/tw-merge";

const avatarVariants = cva("h-20 w-20 rounded-full object-cover", {
  variants: {
    size: {
      md: "h-10 w-10",
      xl: "h-20 w-20",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface AvatarProps
  extends React.ButtonHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof avatarVariants> {
  image?: string;
  userId?: string;
  redirectToProfile?: boolean;
}

export function Avatar({
  image,
  userId,
  redirectToProfile = false,
  size,
  className,
  ...props
}: AvatarProps) {
  const router = useRouter();

  return (
    <Image
      src={image ?? "/person.png"}
      alt=""
      width={80}
      height={80}
      className={merge(
        avatarVariants({ size, className }),
        redirectToProfile ? "cursor-pointer" : "cursor-default"
      )}
      onClick={() => redirectToProfile && router.push(`/profile/${userId}`)}
      placeholder={"blur"}
      blurDataURL="/person.png"
      {...props}
    />
  );
}
