import React from "react";
import styled from "@emotion/styled";


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
  margin-bottom: 2rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const About: React.FC = () => {
  return (
    <>
      <Section>
        <Container>
          <HeaderContainer>
            <Heading>Hi! I'm Junior</Heading>
          </HeaderContainer>
          <SubHeading>About Me</SubHeading>
          <Text>
            Thanks for visiting my page! I am currently WFH full time, and I have been really enjoying my job as a consultant. I am 
            a proud father of three and enjoy. I will periodically update this page as I think of better things to say, but if you would
            like to talk, please do not hesitate to reach out.

          </Text>
          <SubHeading>Interests</SubHeading>
          <Text>
            I have always wanted to create video games, and my love for games led me towards the front-end within web development.
            It has been there that I have been able to enjoy my time at work and grow into the professional I am today. My thirst for knowledge keeps 
            me intersted in learning, dev Ops, backend, and other parts of the development cycle.
          </Text>
        </Container>
      </Section>
      {/* <GridContainer>
      </GridContainer> */}
    </>
  );
};

export default About;
