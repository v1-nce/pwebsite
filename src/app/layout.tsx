import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Navbar } from "./components/Navbar";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Vincent Ong",
  description: "Software Engineer. NUS Computer Science.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={mono.variable}>
      <body className={`${mono.className} min-h-screen p-1 sm:p-4 lg:p-6`}>
        <div className="max-w-5xl mx-auto">
          <div className="border border-term-border rounded-xl overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-term-chrome border-b border-term-border select-none">
              <div className="flex gap-1.5 mr-3 shrink-0">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28c840]" />
              </div>
              <Navbar />
            </div>
            <div className="bg-term-bg px-3 py-4 sm:px-5 sm:py-5 md:px-8 md:py-6">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}