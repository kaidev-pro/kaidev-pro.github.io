import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-body", subsets: ["latin"] });
const cinzel = Cinzel({ variable: "--font-display", subsets: ["latin"], weight: ["600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://kaidevlab.com"),
  title: "Kaidevlab — Kai’s Creative Technology Lab",
  description:
    "Kaidevlab is the personal creative technology lab of Kai, featuring digital products, AI systems, developer tools, learning platforms, and visual experiments.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Kaidevlab — Kai’s Creative Technology Lab",
    description:
      "Digital products, AI systems, developer tools, learning platforms, and visual experiments by Kai.",
    url: "https://kaidevlab.com",
    siteName: "Kaidevlab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaidevlab — Kai’s Creative Technology Lab",
    description:
      "Kai’s living creative technology lab for products, systems, experiments, and stories.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${cinzel.variable}`}>
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {try {const saved = localStorage.getItem('theme'); const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; document.documentElement.dataset.theme = saved || system || 'light';} catch (_) {document.documentElement.dataset.theme = 'light';}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kaidevlab",
  url: "https://kaidevlab.com",
  description: "The personal creative technology lab of Kai.",
};
void jsonLd;
