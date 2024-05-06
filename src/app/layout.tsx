import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import { serverSession } from "@/lib/auth/get-server-session";
import { SessionProvider } from "@/contexts/session";

import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | BookWise',
    default: 'BookWise',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await serverSession();

  return (
    <html lang="pt">
      <body
        className={`${nunito.className} bg-gray-800 h-screen text-gray-100 p-5 max-w-[1440px] m-auto antialiased`}
      >
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
