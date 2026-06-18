import type { Metadata } from "next";
import { Oswald, DM_Sans } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kai — Developer & Entrepreneur",
  description: "Full-stack developer. Founder of 8Agents & RakuSaku. Building production-ready web apps, AI automations, and SaaS workflows.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${dmSans.variable}`}>
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
