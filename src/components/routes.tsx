"use client";

import { ElementType } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { ChartLineUp, Binoculars, User } from "@phosphor-icons/react/dist/ssr";

import { merge } from "@/utils/tw-merge";

interface Route {
  path: string;
  label: string;
  requireSession: boolean;
  icon: ElementType;
  params: string[];
}

export const routes: Route[] = [
  {
    label: "Início",
    path: "/home",
    requireSession: false,
    icon: ChartLineUp,
    params: [],
  },
  {
    label: "Explorar",
    path: "/explore",
    requireSession: false,
    icon: Binoculars,
    params: [],
  },
  {
    label: "Perfil",
    path: "/profile",
    requireSession: true,
    icon: User,
    params: ["id"],
  },
];

export function Routes() {
  const pathName = usePathname();
  const { data } = useSession();

  return (
    <nav className="flex w-full flex-1 flex-col items-start mt-10">
      <ul className="max-lg:flex max-lg:gap-4 max-lg:self-center">
        {routes.map(({ icon: Icon, ...route }) => {
          if (route.requireSession && !data) return null;

          const sameRoute =
            pathName === route.path || pathName.includes(route.path);

          return (
            <li key={route.path}>
              <Link
                href={route.path}
                className={merge(
                  "relative flex w-full items-end gap-4 p-4 max-lg:p-1",
                  sameRoute &&
                    "before:absolute before:left-0 before:inline-block before:h-6 before:w-[5px] before:rounded-md before:bg-bw-gradient-vertical before:content-[''] max-lg:before:-bottom-1 max-lg:before:left-1 max-lg:before:h-[3px] max-lg:before:w-6"
                )}
              >
                <Icon className="text-2xl" />
                <span className="max-lg:hidden">{route.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
