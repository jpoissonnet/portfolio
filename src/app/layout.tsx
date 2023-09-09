import "./globals.css";
import { ReactNode } from "react";
import style from "./layout.module.css";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/layout/Footer";

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
        <main className={style.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
