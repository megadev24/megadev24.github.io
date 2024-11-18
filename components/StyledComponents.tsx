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

export const ProfileContainer = styled(Container)`
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HomeContainer = styled(Container)`
  align-items: center;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 24px;
  width: 1000px;

  @media (max-width: 768px) {
    border: 1px solid white;
    margin: 0 24px;
  }
`;

export const ResumeContainer = styled(FlexContainer)`
  align-items: center;
  justify-content: center;
  margin-top: 0;
  margin-left: 2rem;
  width: 100%;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 1rem;
    margin-left: 0;
  }
`;

export const AboutContainer = styled(FlexContainer)`
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  border: 1px solid white;
  border-radius: 18px;
  padding: 0 2rem;
  height: fit-content;
  margin: 36px 24px 100px 24px;
`;

export const AboutDescriptionContainer = styled.div`
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
  font-size: calc(1.5rem + 1vw);
  font-weight: 600;
  margin: 0;
  color: #fff;
  min-font-size: 2rem;
  max-font-size: 4rem;
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
  align-items: center;
  flex-direction: column;
  height: 100%;
  background-color: transparent;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  min-width: 252px;
`;

export const HomeCard = styled(Card)`
  margin-bottom: 8px;
  height: fit-content;
`;

export const ProjectCard = styled(Card)`
  max-width: 400px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const AboutCard = styled(Card)`
  color: black;
  border-radius: 12px;
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
  border-top: 1px solid black;
  font-size: 1rem;
  font-weight: 600;
  padding-top: 0.5rem;
  margin: 0;
  margin-top: 12px;
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

export const DefaultOptions = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DownloadLink = styled.a`
  color: blue;
`;

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  text-align: center;
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