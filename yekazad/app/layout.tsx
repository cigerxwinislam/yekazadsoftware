// Bismillahirahmanirahmanirahim



import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import BasicExample from './components/Seri'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yekazad Nivisbari / Yazılım Hizmetleri",
  description: "Her türlü yazılım hizmeti verilir. Kargeha Nivîsbarî yê",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <BasicExample/>
        {children}</body>
    </html>
  );
}
