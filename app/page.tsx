import Link from "next/link";
import page from "./page.module.css";
export default function Home() {
  return (
    <section className={page.wrapper}>
      <h2 className={page.title}>
        Hello,
        <br />
        <span className={page.emphasis}>
          I am Jules,
          <br /> nice to meet you.
        </span>
      </h2>
      <p className={page.description}>
        I like to learn things, and I like to share what I learn.
        <br /> I am a frontend apprentice, and I am currently learning React and
        Next.js.
      </p>
      <Link href={"/projects"} className={page.button}>
        <p>See my projects</p>
      </Link>
    </section>
  );
}
