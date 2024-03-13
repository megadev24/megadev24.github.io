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
} from "../components/StyledComponents";
import Image from "next/image";
import img from "../public/images/moonandcloud.jpg";
import img2 from "../public/images/redmoon.jpg";
import img3 from "../public/images/brightmoon.jpg";
// import ScrollingImages from "@/components/ScrollingImages";

const Home = () => {
  const size = 8;
  return (
    <Section>
      <HomeContainer>
        {/* <ScrollingImages images={images} /> */}
        {/* <OpaqueContainer /> */}
        <HeaderContainer>
          <Greeting>Frederick Smeltzer</Greeting>
        </HeaderContainer>
        <FlexContainer>
          <Image
            style={{ borderRadius: "12px" }}
            width={4000 / size}
            height={3000 / size}
            src={img}
            alt=""
            unoptimized
          />
          <Image
            style={{ borderRadius: "12px" }}
            width={4000 / size}
            height={3000 / size}
            src={img2}
            alt=""
            unoptimized
          />
          <Image
            style={{ borderRadius: "12px" }}
            width={4000 / size}
            height={3000 / size}
            src={img3}
            alt=""
            unoptimized
          />
        </FlexContainer>
        <ResumeContainer>
          <HomeCard style={{ alignItems: "center" }}>
            <Description>Frontend Developer</Description>
            <Date>02/2024</Date>
            <DownloadLink
              href="../public/Frederick Smeltzer - FE Resume 2023_24-1.pdf"
              download
            >
              {" "}
              Download Resume{" "}
            </DownloadLink>
          </HomeCard>
          {/* <HomeCard style={{ alignItems: "center" }}>
            <Description>Full Stack Developer</Description>
            <Date>WIP</Date>
            <DownloadLink
              href="../public/Frederick Smeltzer - FE Resume 2023_24-1.pdf"
              download
            >
              {" "}
              Download Resume{" "}
            </DownloadLink>
          </HomeCard> */}
        </ResumeContainer>
      </HomeContainer>
    </Section>
  );
};

export default Home;
