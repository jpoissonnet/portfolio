import React from "react";
import style from "./page.module.css";

const Resume = () => {
  return (
    <>
      <h1 className={style.title}>Resume</h1>
      <section className={style.section}>
        <h2 className={style.subtitle}>Profile</h2>
        <p>
          I am curious and I like to learn many things that is why I like
          computer science that much. I love the feeling of getting better at
          something. What I also like is to make visual things. Front-end
          development is a good way to combine both of these things. It is wide
          and there is always something new to learn.
        </p>
      </section>
      <section className={style.section}>
        <h2 className={style.subtitle}>Professional Experiences</h2>
        <ul>
          <li className={style.item}>
            <h3 className={style.itemTitle}>
              Apprenticeship as a Front-End Developer at Bedrock Streaming
            </h3>
            <span className={style.date}>since September 2022</span>
            <p>
              I am currently doing an apprenticeship at Bedrock Streaming. I am
              working in the front-end team. I am working on recreating the
              6play.fr website in Next.js to discover technologies one by one.
            </p>
          </li>
          <li className={style.item}>
            <h3 className={style.itemTitle}>
              Internship as Fullstack Angular / Java at Atol CD
            </h3>
            <span className={style.date}>04-2021 / 07-2021 (3 months)</span>
            <p>
              During my studies, I had the chance to do an internship at the end
              of my 2 years of DUT Informatique. I integrated the Atol CD
              company in the development team.
            </p>
            <p>
              I worked on a Alfresco Application. Alfresco is a content
              management system business oriented. I worked on implementing some
              workflow partly written in Java in a Angular application that I
              created from scratch.
            </p>
          </li>
        </ul>
      </section>
      <section className={style.section}>
        <h2 className={style.subtitle}>Education</h2>
        <ul>
          <li className={style.item}>
            <h3 className={style.itemTitle}>
              Bachelor Degree in Web Engineering at ESGI Lyon
            </h3>
            <span>2022-2023</span>
          </li>
          <li className={style.item}>
            <h3 className={style.itemTitle}>
              DUT Informatique at IUT de Dijon
            </h3>
            <span>2020-2022</span>
          </li>
          <li className={style.item}>
            <h3 className={style.itemTitle}>
              Baccalauréat Scientifique at Lycée Hippolyte Fontaine
            </h3>
            <span>2018-2020</span>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Resume;
