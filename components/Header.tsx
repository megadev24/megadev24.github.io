"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";
import {
  Container,
  Navbar,
  Heading,
  Nav,
  StyledLink,
} from "./StyledComponents";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Container>
      <Navbar>
        <Heading
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          {isExpanded ? "Frederick P. Smeltzer" : "FPS"}
        </Heading>
        <Nav>
          <StyledLink href="/">Home</StyledLink>
          <StyledLink href="/about">About</StyledLink>
          <StyledLink href="/projects">Projects</StyledLink>
          <StyledLink href="/contrabot">Contrabot</StyledLink>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default Header;
