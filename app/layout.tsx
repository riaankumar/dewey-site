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
  title: "Emulate — Turn screen recordings into executable guides.",
  description:
    "Emulate turns screen recordings into guided, executable workflows with verified completion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${emilio.variable} ${hostGrotesk.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
