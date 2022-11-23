import Link from "next/link";

export default function Home() {
  return (
    <section
      className={"flex flex-col justify-around py-24 gap-12 items-start"}
    >
      <h2
        className={
          "text-5xl font-bold text-slate-50 tracking-tight leading-snug "
        }
      >
        Hello,
        <br />
        <span
          className={
            "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
          }
        >
          I am Jules,
          <br /> nice to meet you.
        </span>
      </h2>
      <p className={"text-xl text-slate-50 tracking-tight font-light"}>
        I like to learn things, and I like to share what I learn.
        <br /> I am a frontend apprentice, and I am currently learning React and
        Next.js.
      </p>
      <Link href={"/projects"}>
        <>
          <span
            className={
              "inline-block relative text-slate-50 rounded p-5 font-light text-shadow cursor-pointer bg-gradient-to-l from-blue-500 to-purple-500 z-10 overflow-clip " +
              "before:absolute before:w-full before:h-full before:top-0 before:-left-full before:bg-gradient-to-l before:from-purple-500 before:to-purple-700 before:-z-10 before:rounded " +
              "hover:before:translate-x-full before:transition-all hover:before:duration-300"
            }
          >
            See my projects
            <span className={"inline-block -translate-y-0.5 ml-0.5 "}>👉</span>
          </span>
        </>
      </Link>
    </section>
  );
}
