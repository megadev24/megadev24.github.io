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
  FlexContainer,
  Container,
} from "../components/StyledComponents";
import Image from "next/image";
import img from "../public/images/meinhou.jpg";
// import ScrollingImages from "@/components/ScrollingImages";

const Home = () => {
  const size = 10.5;
  return (
    <Section>
      <HomeContainer>
        {/* <ScrollingImages images={images} /> */}
        {/* <OpaqueContainer /> */}
        <HeaderContainer>
          <Greeting>{'Frederick "Junior" Smeltzer'}</Greeting>
        </HeaderContainer>
        <FlexContainer
          style={{ flexDirection: "row" }}
        >
          <Image
            style={{ borderRadius: "12px" }}
            width={3000 / size}
            height={4000 / size}
            src={img}
            alt=""
            unoptimized
          />
          <ResumeContainer>
            <Container style={{justifyContent: "space-between" }}>
              <HomeCard style={{ alignItems: "center" }}>
                <Description>Frontend Developer</Description>
                <Date>02/2024</Date>
                <DownloadLink
                  href="/Frederick Smeltzer - FE Resume 2023_24-1.pdf"
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
        </FlexContainer>
      </HomeContainer>
    </Section>
  );
};

export default Home;
