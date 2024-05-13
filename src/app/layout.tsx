import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "./Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce",
  description: "MiniProject",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/*<Container>{children}<Footer/></Container>          */}
      {/* <Header/> */}
        {children}
        </body>
    </html>
  );
}
