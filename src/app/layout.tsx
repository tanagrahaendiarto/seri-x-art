import type { Metadata } from "next";
import { Fraunces, Poppins } from "next/font/google";
import ScrollRestoration from "@/components/ScrollRestoration";
import MotionProvider from "@/components/MotionProvider";
import { siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const title = "Seri X Art 2026 — Create. Inspire. Compete.";
const description =
  "An art competition platform where creativity meets innovation. Showcase your talent, compete with the best, and inspire the world.";

const fraunces = Fraunces({
  variable: "--font-display",
  weight: ["700", "900"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
      className={`${fraunces.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollRestoration />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
