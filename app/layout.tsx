import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader/Preloader";

const inter = Inter({ subsets: ["latin"] });
const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baljeet Jangra - Frontend Developer",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
