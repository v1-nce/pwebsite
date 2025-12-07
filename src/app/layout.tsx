import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";

const pixelFont = VT323({ 
  weight: "400", 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vincent",
  description: "Vincent",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={pixelFont.className}>
        {children}
      </body>
    </html>
  );
}