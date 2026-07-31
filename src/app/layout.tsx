import type { Metadata } from "next";
import { bodyFont, displayFont } from "@/lib/fonts";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luma Socks | Wear Who You Are",
  description:
    "Shop colorful socks and fixed three-pair editions from Luma. Choose EU 36–40 or 41–46 and pay cash on delivery in Morocco.",
  icons: {
    icon: "/assets/brand/logo-eyes-blue.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable}`}
    >
      <body className="bg-luma-white font-body text-onyx antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-celtic-blue focus:px-4 focus:py-2 focus:text-luma-white"
        >
          Skip to content
        </a>
        <AnnouncementBar />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
