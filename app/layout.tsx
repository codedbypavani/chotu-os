import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { AppProviders } from "@/components/providers/app-providers";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Chotu OS",
  description: "A futuristic AI-powered coding room and life operating system for ambitious students.",
  applicationName: "Chotu OS",
  manifest: "/manifest.webmanifest"
};

export const viewport: Viewport = {
  themeColor: "#050816",
  colorScheme: "dark light"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
