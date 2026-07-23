import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Primary — headings and titles. Static Light cut.
const emilio = localFont({
  src: "../public/fonts/EmilioTest-Light-BF64a3994959ec1.otf",
  variable: "--font-emilio",
  weight: "300",
  display: "swap",
});

// Secondary — body copy and UI. Variable, wght axis 300–800.
const hostGrotesk = localFont({
  src: "../public/fonts/HostGrotesk-VariableFont_wght.ttf",
  variable: "--font-host",
  weight: "300 800",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emulate — Handoff the work, not another video",
  description:
    "Emulate turns how a teammate works into an assistant another person can watch, question, and follow inside the real application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${emilio.variable} ${hostGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
