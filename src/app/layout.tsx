import type { Metadata } from "next";
import { storeConfig } from "@/config/store";
import { bodyFont, displayFont } from "@/lib/fonts";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/components/cart/CartProvider";
import "./globals.css";

const SITE_DESCRIPTION =
  "Shop colorful socks and fixed three-pair editions from Luma. Choose EU 36–40 or 41–46 and pay cash on delivery in Morocco.";

export const metadata: Metadata = {
  // Makes every page's relative metadata resolve to absolute share URLs.
  metadataBase: new URL(storeConfig.siteUrl),
  title: {
    default: "Luma Socks | Wear Who You Are",
    template: "%s | Luma Socks",
  },
  description: SITE_DESCRIPTION,
  applicationName: storeConfig.brandName,
  icons: {
    icon: "/assets/brand/logo-eyes-blue.svg",
  },
  openGraph: {
    type: "website",
    siteName: storeConfig.brandName,
    title: "Luma Socks | Wear Who You Are",
    description: SITE_DESCRIPTION,
    locale: "en",
    url: storeConfig.siteUrl,
    images: [
      {
        url: "/assets/brand/luma-delivering-happiness-poster.jpg",
        width: 1280,
        height: 720,
        alt: "Luma Socks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luma Socks | Wear Who You Are",
    description: SITE_DESCRIPTION,
    images: ["/assets/brand/luma-delivering-happiness-poster.jpg"],
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
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
