import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/ui/CartDrawer";
import CustomCursor from "@/components/ui/CustomCursor";
import IntroScreen from "@/components/ui/IntroScreen";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ClickRipple from "@/components/ui/ClickRipple";
import SectionColorTracker from "@/components/ui/SectionColorTracker";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GuedZZ — House • Tech • Minimal",
  description: "DJ & Producer. Music is the answer. Art in motion. Soul in expansion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body className={`${inter.variable} antialiased bg-[var(--background)] text-[var(--text-primary)] relative`}>
        <IntroScreen />
        <ScrollProgress />
        <ClickRipple />
        <SectionColorTracker />
        <CustomCursor />
        <Header />
        <main className="relative">{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
