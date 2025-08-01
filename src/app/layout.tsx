import type { Metadata } from "next";
import { Geist } from "next/font/google";
import AuthProvider from "@/components/AuthProvider";
import "./globals.scss";
import Header from "@/components/Header";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Twitter Clone",
    template: "%s | Twitter Clone",
  },
  description: "A simple Twitter clone built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
