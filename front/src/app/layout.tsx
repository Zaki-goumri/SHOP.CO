

import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Header } from "../components/globalComponents/header";
import { Suspense } from "react";
import Loading from "../components/globalComponents/loading";
import ReactQueryProvider from "@/lib/query.utlis";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
      
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading/>} >
        <ReactQueryProvider>
        <Header />
        {children}
        </ReactQueryProvider>
        </Suspense>
      </body>
    </html>
  );
}


