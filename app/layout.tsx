import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/archivo/wdth-italic.css";
import "./globals.css";

const description =
  "Izzah Farhanah Faizul, full-stack software engineer. Software engineer intern at Cloud Connect, graduating from UiTM in March 2027.";

export const metadata: Metadata = {
  metadataBase: new URL("https://izzahfff.vercel.app"),
  title: { default: "Izzah Farhanah, full-stack software engineer", template: "%s, Izzah Farhanah" },
  description,
  openGraph: { title: "Izzah Farhanah", description, type: "website", url: "/" },
  twitter: { card: "summary_large_image", title: "Izzah Farhanah", description },
};

export const viewport: Viewport = { themeColor: "#121212" };

const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
