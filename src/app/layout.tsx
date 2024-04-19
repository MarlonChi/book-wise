import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Wise",
  description: "Book Wise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} bg-gray-800 h-screen text-gray-100 p-5 max-w-[1440px] m-auto`}
      >
        {children}
      </body>
    </html>
  );
}
