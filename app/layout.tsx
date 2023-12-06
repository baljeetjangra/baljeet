import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader/Preloader";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Preloader />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
