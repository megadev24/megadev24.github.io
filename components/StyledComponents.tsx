import styled from "@emotion/styled";
import Link from "next/link";

export const FlexContainer = styled.div`
  display: flex;
`;

export const Container = styled(FlexContainer)`
  flex-direction: column;
`;

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeContainer = styled(Container)`
  align-items: center;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 24px;
  width: 1000px;
`;

export const ResumeContainer = styled(FlexContainer)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 2;
`;

export const AboutContainer = styled(FlexContainer)`
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
`;

export const AboutDescriptionContainer = styled.div`
  border: 1px solid white;
  border-radius: 18px;
  padding: 2rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;

  @media (max-width: 1000px) {
    width: 80vw;
  }
`;

export const OpaqueContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 1;
`;

export const Navbar = styled.header`
  display: flex;
  align-items: center;
  background-color: black;
  justify-content: space-between;
  padding: 1rem;
  height: 60px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const Heading = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  margin: 0;
  color: #fff;
`;

export const Greeting = styled.h1`
  font-size: 4.2rem;
  font-weight: 600;
  margin: 0;
  color: #fff;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const StyledLink = styled(Link)`
  display: flex;
  height: 40px;
  align-items: center;
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #aaa;
  }
`;

export const Section = styled.section`
  color: black;
  margin: 2rem 0 124px 0;
  display: flex;
  justify-content: center;
`;

export const AboutSection = styled(Section)`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  margin-top: 2rem;
  background-color: transparent;
  padding: 2rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  max-width: 1000px;
  color: white;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const HomeCard = styled(Card)`
  margin: 2rem;
`;

export const ProjectCard = styled(Card)`
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const Name = styled.h1``;
export const Date = styled.p``;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
`;

export const Tech = styled.p`
  font-size: 1rem;
  font-weight: 500;
  padding-top: 0.5rem;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin: 0;
`;

export const Button = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 1rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #666;
  }
`;

export const DownloadLink = styled.a`
  color: blue;
`;

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const AboutHeading = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

export const SubHeading = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  margin: 2rem 0;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;
