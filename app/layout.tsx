import type { Metadata } from "next";
import { hachiMaru } from "./ui/fonts";
import "./globals.css";
import Bottomnav from "./ui/components/botNav";

export const metadata: Metadata = {
  title: "Moonshelf",
  description: "My own little corner of the internet to share my projects and thoughts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hachiMaru.className} h-full antialiased pb-16`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Bottomnav />
      </body>
    </html>
  );
}
