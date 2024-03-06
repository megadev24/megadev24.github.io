"use client";

import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import img from "../../public/images/meandfam.jpg";

const Section = styled.section`
  display: flex;
  align-self: center;
  margin-top: 2rem;
  height: 100vh;
  background-color: transparent;
  padding: 2rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  max-width: 1000px;
  color: white;
`;

const Container = styled.div`
  width: 80%;
  max-width: 1000px;
  @media (max-width: 1000px) {
    width: 80vw;
  }
`;

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Heading = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const SubHeading = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  margin: 2rem 0;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "80px",
      }}
    >
      <Section
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Image
          src={img}
          width={1079 / 2 * 1.48}
          height={727 / 2 * 1.48}
          alt="Picture of the author"
          style={{
            borderRadius: "18px",
            overflow: "hidden",
          }}
          unoptimized
        />
        <Container
          style={{
            border: "1px solid white",
            borderRadius: "18px",
            padding: "24px",
            height: "fit-content",
          }}
        >
          <HeaderContainer>
            <Heading>Hi! I&apos;m Junior</Heading>
          </HeaderContainer>
          <SubHeading>About Me</SubHeading>
          <Text>
            I&apos;m a passionate frontend developer with over 5 years of
            experience crafting dynamic and user-friendly web applications. My
            journey in the world of programming began with a fascination for
            creating interactive experiences that seamlessly blend form and
            function. Since then, I&apos;ve honed my skills in JavaScript,
            HTML/CSS, React, and TypeScript to bring digital ideas to life.
          </Text>
          <SubHeading>Professional Journey</SubHeading>
          <Text>
            In my professional career, I&apos;ve had the opportunity to work on
            a variety of projects, from overhauling legacy systems to developing
            innovative frontend solutions. I thrive in collaborative
            environments where communication is key, and I&apos;ve enjoyed
            mentoring junior developers to foster a culture of continuous
            learning and improvement.
          </Text>
          <SubHeading>Expertise</SubHeading>
          <Text>
            With expertise in frontend technologies such as React and
            TypeScript, I specialize in building responsive, accessible, and
            visually engaging user interfaces. I&apos;m passionate about
            leveraging the latest tools and techniques to create exceptional
            user experiences that meet the needs of both clients and end-users.
          </Text>
          <SubHeading>Personal Touch</SubHeading>
          <Text>
            Beyond my professional endeavors, I&apos;m also a dedicated
            problem-solver, whether it&apos;s tackling complex coding challenges
            or fixing electronics that my kids break (a skill I&apos;ve become
            quite proficient in!). I believe that a touch of creativity and a
            willingness to think outside the box can lead to innovative
            solutions in both work and life.
          </Text>
          <SubHeading>Goals and Aspirations</SubHeading>
          <Text>
            In addition to my frontend expertise, I&apos;m actively pursuing
            opportunities to broaden my skill set and become a more well-rounded
            developer. I&apos;m currently delving into technologies such as
            Docker and Spring Boot to deepen my understanding of backend
            development and DevOps practices. By mastering these tools, I aim to
            transition into a more fullstack role, where I can contribute to
            every aspect of the development lifecycle and architect end-to-end
            solutions. Beyond advancing my technical skills, I&apos;m also
            passionate about exploring new horizons in game development. With a
            lifelong love for gaming and interactive storytelling, I&apos;m
            eager to channel my creativity into creating immersive gaming
            experiences. Whether it&apos;s indie projects or larger-scale
            productions, I&apos;m excited to dive into the world of game
            development and bring my unique vision to life. Looking ahead, my
            overarching goal is to continue pushing the boundaries of
            what&apos;s possible in the digital realm. I thrive on challenges
            that stretch my abilities and spark my creativity, and I&apos;m
            committed to lifelong learning and growth. Whether it&apos;s
            building cutting-edge web applications, developing innovative games,
            or exploring emerging technologies, I&apos;m always eager to embark
            on new adventures and make meaningful contributions to the
            ever-evolving landscape of technology and entertainment.
          </Text>
          <SubHeading>Get in Touch</SubHeading>
          <Text>
            If you&apos;re interested in learning more about my work or
            discussing potential collaborations, I&apos;d love to hear from you.
            Feel free to reach out via email or connect with me on LinkedIn.
          </Text>
        </Container>
      </Section>
      {/* <GridContainer>
      </GridContainer> */}
    </div>
  );
};

export default About;
