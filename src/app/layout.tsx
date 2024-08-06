import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cite Rite",
  description: "The most advanced way to find citations that back up a document's claims.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full top-0 relative bg-slate-800 py-6 px-8">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-3xl">Cite Rite</h1>
            <p>The most advanced way to find citations that back up a document's claims.</p>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
