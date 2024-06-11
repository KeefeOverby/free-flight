import type { Metadata } from "next";
import { montserrat } from '@/app/ui/fonts';
import "@/app/ui/globals.css";

export const metadata: Metadata = {
  title: "FreeFlight",
  description: "Pilot pre-flight electronic flight bag",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.className} antialiased `}>
      <body>{children}</body>
    </html>
  );
}
