import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebTool : SEO Tools Box",
  description: "WebTool: Your ultimate guide to the best SEO tools online, curated to navigate and enhance your website's SEO strategy effectively.",
  keywords: ["SEO tools", "SEO extensions", "SEO blogs", "search engine optimization", "website optimization", "SEO strategy"],
  authors: [{ name: "WebTool", url: "https://webtool" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
