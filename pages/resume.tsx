import React from "react";
import NavbarTop from "../components/Navigation/NavbarTop/navbartop";
import styled from "styled-components";

const ResumeRoot = styled.div`
  max-width: 768px;
  margin: auto;
  padding: 20px;
`;

const Resume = () => {
  return (
    <>
      <NavbarTop />
      <ResumeRoot>
        <h1>Resume</h1>
        <section>
          <h2>Profile</h2>
          <p>
            I am curious and I like to learn many things that is why I like
            computer science that much. I love the feeling of getting better at
            something. What I also like is to make visual things. Front-end
            development is a good way to combine both of these things. It is
            wide and there is always something new to learn.
          </p>
        </section>
        <section>
          <h2>Professionnal Experiences</h2>
          <ul>
            <li>
              <h3>Apprenticeship as Front-End Assistant Developer at Bedrock Streaming</h3>
              <span>since September 2022</span>
              <p>
                I am currently doing an apprenticeship at Bedrock Streaming. I
                am working in the front-end team. I am working on recreating the
                6play.fr website in Next.js to discover technologies one by one.
              </p>
            </li>
            <li>
              <h3>Internship as Fullstack Angular / Java at Atol CD</h3>
              <span>04-2021 / 07-2021 (3 months)</span>
              <p>
                During my studies, I had the chance to do an internship at the end
                of my 2 years of DUT Informatique. I integrated the Atol CD
                company in the development team.
              </p>
              <p>
                I worked on a Alfresco Application. Alfresco is a content
                management system business oriented. I worked on implementing
                some workflow partly written in Java in a Angular application
                that I created from scratch.
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Education</h2>
          <ul>
            <li>
              <h3>Bachelor Degree in Web Engineering at ESGI Lyon</h3>
              <span>2022-2023</span>
            </li>
            <li>
              <h3>DUT Informatique at IUT de Dijon</h3>
              <span>2020-2022</span>
            </li>
          </ul>
        </section>
      </ResumeRoot>
    </>
);
};

export default Resume;
