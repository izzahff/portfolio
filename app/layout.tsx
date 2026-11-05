import type { Metadata, Viewport } from "next";
import "@fontsource/gloock/400.css";
import "@fontsource-variable/hanken-grotesk";
import "./globals.css";

const description =
  "Izzah Farhanah Faizul, full-stack software engineer. Software engineer intern at Cloud Connect, graduating from UiTM in March 2027.";

export const metadata: Metadata = {
  metadataBase: new URL("https://izzahfarhanah.vercel.app"),
  title: { default: "Izzah Farhanah, full-stack software engineer", template: "%s, Izzah Farhanah" },
  description,
  openGraph: { title: "Izzah Farhanah", description, type: "website", url: "/" },
  twitter: { card: "summary_large_image", title: "Izzah Farhanah", description },
};

export const viewport: Viewport = { themeColor: "#13213b" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
