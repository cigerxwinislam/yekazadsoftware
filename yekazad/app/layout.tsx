// Bismillahirahmanirahim



import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import 'bootstrap/dist/css/bootstrap.css'
import BasicExample from "./nav";




import Footer from "./footer";

import { Tegihistin } from "./tegihistin";

import React from "react";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Yekazad Software Center",
  description: "Kargeha Nivîsbarîyê",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{background:"green",color:"white"}} className={inter.className}>
        
        <BasicExample/>
        {children}
    
<Tegihistin/>

        <Footer/>
        </body>
    </html>
  );
}
