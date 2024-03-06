"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const ProjectCard = styled.div`
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

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main>
      <Container>
        <Navbar>
          <Heading
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >
            {isExpanded ? "Frederick P. Smeltzer" : "FPS"}
          </Heading>
          <Nav>
            {/* <StyledLink href="/">LP</StyledLink> */}
            <StyledLink href="/">Home</StyledLink>
            <StyledLink href="/about">About</StyledLink>
            <StyledLink href="/projects">Projects</StyledLink>
            {/* <StyledLink to="/contrabot">Contrabot</StyledLink> */}
          </Nav>
        </Navbar>
      </Container>
    </main>
  );
};

export default Header;
