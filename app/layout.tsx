import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar/navbar.component";
import { Toaster } from "./components/ui/toaster";
import StoreProvider from "./storeProvider";
import { LoaderComponent } from "./components/commons/loader.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Swap",
  description: "Exchange books",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>

      <body className={inter.className}>
        <StoreProvider>
          <LoaderComponent></LoaderComponent>
          <Navbar></Navbar>
          {children}
          <Toaster />
        </StoreProvider>
      </body>
    </html>
  );
}
