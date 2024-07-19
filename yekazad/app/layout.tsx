// Bismillahirahmanirahmanirahim



import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BasicExample from './components/Seri'
import 'bootstrap/dist/css/bootstrap.css'
import Bingeh from "./components/Bingeh";
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
        {children}
        
        <Bingeh/>
        </body>
    </html>
  );
}
