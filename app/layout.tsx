import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Background } from "../components/background";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edra - BlogFolio",
  description: "Developer studying Computer Science in UBC.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen px-4 md:px-12 bg-zinc-900`}
      >
        <div
          className="background-container hidden sm:block absolute inset-0 z-0"
          style={{ pointerEvents: "none" }}
        >
          <Background />
        </div>
        <Header />
        <main className="flex min-w-min flex-col items-center justify-center bg-zinc-900">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
