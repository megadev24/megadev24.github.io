import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frederick Smeltzer Portfolio",
  description:
    "Thanks for stopping by! I'm Frederick Smeltzer, a software engineer based in the United States. I'm passionate about building software that makes a difference. Let's connect!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ margin: 0, backgroundColor: "black"}}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
