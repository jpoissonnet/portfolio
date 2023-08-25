import "./globals.css";
import Navbar from "./(layout)/navigation/Navbar";
import { ReactNode } from "react";
import Footer from "./(layout)/footer";
import "./layout.module.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <title>Jules P.</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Jules Poissonnet's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
