import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Update this once you deploy — used to resolve absolute OG/Twitter image URLs.
const SITE_URL = "https://pragathi-garipally.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Pragathi Garipally | Full-Stack Developer",
  description:
    "Portfolio of Pragathi Garipally — Full-Stack Developer & Python Enthusiast building modern, performant web experiences.",
  keywords: [
    "Pragathi Garipally",
    "Full-Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Pragathi Garipally" }],
  creator: "Pragathi Garipally",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Pragathi Garipally — Portfolio",
    title: "Pragathi Garipally | Full-Stack Developer",
    description:
      "Full-Stack Developer & Python Enthusiast building modern, performant web experiences.",
    images: [
      {
        url: "/IMG_7742.jpg",
        width: 1200,
        height: 1200,
        alt: "Pragathi Garipally",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pragathi Garipally | Full-Stack Developer",
    description:
      "Full-Stack Developer & Python Enthusiast building modern, performant web experiences.",
    images: ["/IMG_7742.jpg"],
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
