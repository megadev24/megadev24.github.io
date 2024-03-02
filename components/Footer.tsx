"use client";

import React from "react";
import styled from "@emotion/styled";
import { FaGithubAlt, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  border-top: 2px solid #e3f600;
  height: 80px;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: #fff;
  margin: 0 1rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #e3f600;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Link href="https://www.linkedin.com/in/frederick-smeltzer-b9038898/">
        <FaLinkedin />
      </Link>
      <Link href="mailto:fsmeltzer3@gmail.com">
        <FaEnvelope />
      </Link>
      <Link href="https://github.com/megadev24">
        <FaGithubAlt />
      </Link>
    </FooterContainer>
  );
};

export default Footer;
