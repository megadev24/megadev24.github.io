"use client";

import {
  Section,
  HomeContainer,
  HomeCard,
  Date,
  Description,
  DownloadLink,
  ResumeContainer,
  HeaderContainer,
  Greeting,
  ProfileContainer,
  Container,
} from "../components/StyledComponents";
import RainBackground from "@/components/RainBackground";
import Image from "next/image";
import img from "../public/images/meinhou.jpg";

const Home = () => {
  const size = 10.5;
  return (
    <Section>
      <RainBackground />
      <HomeContainer>
        <HeaderContainer>
          <Greeting>{'Frederick "Junior" Smeltzer'}</Greeting>
        </HeaderContainer>
        <ProfileContainer>
          <Image
            style={{ borderRadius: "12px" }}
            width={3000 / size}
            height={4000 / size}
            src={img}
            alt=""
            unoptimized
          />
          <ResumeContainer>
            <Container style={{ justifyContent: "space-between" }}>
              <HomeCard style={{ alignItems: "center" }}>
                <Description>Frontend Developer</Description>
                <Date>11/2024</Date>
                <DownloadLink
                  href="/Frederick Smeltzer - FE Resume 2023_24.pdf"
                  download
                >
                  {" "}
                  Download Resume{" "}
                </DownloadLink>
              </HomeCard>
              <HomeCard style={{ alignItems: "center" }}>
                <Description>Full Stack Developer</Description>
                <Date>WIP</Date>
                {/* <DownloadLink href="/" download>
                  {" "}
                  Download Resume{" "}
                </DownloadLink> */}
              </HomeCard>
              <HomeCard style={{ alignItems: "center" }}>
                <Description>Game Developer</Description>
                <Date>WIP</Date>
                {/* <DownloadLink href="/" download>
                  {" "}
                  Download Resume{" "}
                </DownloadLink> */}
              </HomeCard>
            </Container>
          </ResumeContainer>
        </ProfileContainer>
      </HomeContainer>
    </Section>
  );
};

export default Home;
