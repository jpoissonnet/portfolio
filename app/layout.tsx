import RootLayout from "./RootLayout";
import { ReactNode } from "react";
import Head from "next/head";
import NavbarTop from "./(layout)/navigation/NavbarTop/navbartop";
import Footer from "./(layout)/footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <Head>
        <title>Jules P. - Portfolio</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <body>
        <NavbarTop />
        <RootLayout>{children}</RootLayout>
        <Footer />
      </body>
    </html>
  );
}
