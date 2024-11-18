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
  DefaultOptions,
} from "./StyledComponents";
import MoreOptionsButton from "./MoreOptionsButton";

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
          <DefaultOptions>
            <StyledLink href="/">Home</StyledLink>
            <StyledLink href="/about">About</StyledLink>
            <StyledLink href="/projects">Projects</StyledLink>
            <StyledLink href="/contrabot">Contrabot</StyledLink>
          </DefaultOptions>
          <MoreOptionsButton>
            <StyledLink href="/">Home</StyledLink>
            <StyledLink href="/about">About</StyledLink>
            <StyledLink href="/projects">Projects</StyledLink>
            <StyledLink href="/contrabot">Contrabot</StyledLink>
          </MoreOptionsButton>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default Header;
