import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} body-grid bg-custom-gradient text-textColor`}>
        <header className="header-grid h-full w-full"><Header /></header>
        <nav className="nav-grid"><Sidebar /></nav>
        <main className="main-grid">{children}</main>
      </body>
    </html>
  );
}
