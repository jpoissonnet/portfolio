import "./globals.css";
import NavbarTop from "./(layout)/navigation/navbar";
import { ReactNode } from "react";
import Footer from "./(layout)/footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={"bg-neutral-900"}>
        <NavbarTop />
        <main className={"relative z-0 max-w-screen-xl m-auto p-4 md:p-8"}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
