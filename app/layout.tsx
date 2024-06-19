import type { Metadata, Viewport } from "next";
import { montserrat } from '@/app/ui/fonts';
import "@/app/ui/globals.css";

const APP_NAME = "FreeFlight PWA App";
const APP_DEFAULT_TITLE = "FreeFlight";
const APP_TITLE_TEMPLATE = "FreeFlight's - PWA App";
const APP_DESCRIPTION = "Pilot pre-flight electronic flight bag";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={`${montserrat.className} antialiased bg-gray-800 text-red-400`} dir="ltr">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;