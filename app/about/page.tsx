"use client";

import React from "react";
import Image from "next/image";
import img from "../../public/images/meandfam.jpg";
import {
  AboutContainer,
  AboutDescriptionContainer,
  AboutSection,
  AboutCard,
  SubHeading,
  Text,
} from "../../components/StyledComponents";
import RainBackground from "@/components/RainBackground";
import styled from '@emotion/styled';

const ResponsiveImage = styled(Image)`
  width: 100%;
  height: auto;
  max-width: 756px;
  border-radius: 18px;
  overflow: hidden;
  object-fit: cover;
  margin-bottom: 48px;
`;

const About = () => {
  return (
    <main>
      <RainBackground />
      <AboutContainer>
        <AboutSection>
          <ResponsiveImage
            src={img}
            width={(1079 / 2) * 1.48}
            height={(727 / 2) * 1.48}
            alt="Picture of the author"
            style={{
              borderRadius: "18px",
              overflow: "hidden",
            }}
            unoptimized
          />
          <AboutDescriptionContainer>
            <SubHeading>About Me</SubHeading>
            <AboutCard>
              <Text>
                I&apos;m a passionate frontend developer with over 6 years of
                experience crafting dynamic and user-friendly web applications.
                My journey in the world of programming began with a fascination
                for creating interactive experiences that seamlessly blend form
                and function. Since then, I&apos;ve honed my skills in
                JavaScript, HTML/CSS, React, and TypeScript to bring digital
                ideas to life.
              </Text>
            </AboutCard>
            <SubHeading>Professional Journey</SubHeading>
            <AboutCard>
              <Text>
                In my professional career, I&apos;ve had the opportunity to work
                on a variety of projects, from overhauling legacy systems to
                developing innovative frontend solutions. I thrive in
                collaborative environments where communication is key, and
                I&apos;ve enjoyed mentoring junior developers to foster a
                culture of continuous learning and improvement.
              </Text>
            </AboutCard>
            <SubHeading>Expertise</SubHeading>
            <AboutCard>
              <Text>
                With expertise in frontend technologies such as React and
                TypeScript, I specialize in building responsive, accessible, and
                visually engaging user interfaces. I&apos;m passionate about
                leveraging the latest tools and techniques to create exceptional
                user experiences that meet the needs of both clients and
                end-users.
              </Text>
            </AboutCard>
            <SubHeading>Personal Touch</SubHeading>
            <AboutCard>
              <Text>
                Beyond my professional endeavors, I&apos;m also a dedicated
                problem-solver, whether it&apos;s tackling complex coding
                challenges or fixing electronics that my kids break (a skill
                I&apos;ve become quite proficient in!). I believe that a touch
                of creativity and a willingness to think outside the box can
                lead to innovative solutions in both work and life.
              </Text>
            </AboutCard>
            <SubHeading>Goals and Aspirations</SubHeading>
            <AboutCard>
              <Text>
                In addition to my frontend expertise, I&apos;m actively pursuing
                opportunities to broaden my skill set and become a more
                well-rounded developer. I&apos;m currently delving into
                technologies such as Docker and Spring Boot to deepen my
                understanding of backend development and DevOps practices. By
                mastering these tools, I aim to transition into a more fullstack
                role, where I can contribute to every aspect of the development
                lifecycle and architect end-to-end solutions. Beyond advancing
                my technical skills, I&apos;m also passionate about exploring
                new horizons in game development. With a lifelong love for
                gaming and interactive storytelling, I&apos;m eager to channel
                my creativity into creating immersive gaming experiences.
                Whether it&apos;s indie projects or larger-scale productions,
                I&apos;m excited to dive into the world of game development and
                bring my unique vision to life. Looking ahead, my overarching
                goal is to continue pushing the boundaries of what&apos;s
                possible in the digital realm. I thrive on challenges that
                stretch my abilities and spark my creativity, and I&apos;m
                committed to lifelong learning and growth. Whether it&apos;s
                building cutting-edge web applications, developing innovative
                games, or exploring emerging technologies, I&apos;m always eager
                to embark on new adventures and make meaningful contributions to
                the ever-evolving landscape of technology and entertainment.
              </Text>
            </AboutCard>
            <SubHeading>Get in Touch</SubHeading>
            <AboutCard>
              <Text>
                If you&apos;re interested in learning more about my work or
                discussing potential collaborations, I&apos;d love to hear from
                you. Feel free to reach out via email or connect with me on
                LinkedIn.
              </Text>
            </AboutCard>
          </AboutDescriptionContainer>
        </AboutSection>
      </AboutContainer>
    </main>
  );
};

export default About;
