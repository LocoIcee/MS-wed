import { Pinyon_Script, Quattrocento } from "next/font/google";
import "./globals.css";

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

export const metadata = {
  title: "Stewart & Monique",
  description: "Wedding celebration website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${quattrocento.variable} ${pinyonScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

