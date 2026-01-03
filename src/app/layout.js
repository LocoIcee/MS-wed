import { Pinyon_Script, Quattrocento, Roboto_Mono } from "next/font/google";
import "./globals.css";
import SiteNav from "../components/site-nav";

const quattrocento = Quattrocento({
  variable: "--font-quattrocento",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const pinyonScript = Pinyon_Script({
  variable: "--font-pinyon-script",
  subsets: ["latin"],
  weight: "400",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Stewart & Monique",
  description: "Wedding celebration website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${quattrocento.variable} ${pinyonScript.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
        <SiteNav />
      </body>
    </html>
  );
}

