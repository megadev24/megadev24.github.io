"use client";

import React, { useState } from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: block;
  position: relative;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Dropdown = styled.div`
  display: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  right: 0;
  background-color: black;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 0.5rem;
  z-index: 1000;
`;

interface MoreOptionsButtonProps {
    children: React.ReactNode;
}

const MoreOptionsButton: React.FC<MoreOptionsButtonProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Button onClick={() => setIsOpen(!isOpen)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#fff"
            >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <Dropdown isOpen={isOpen}>
                {children}
            </Dropdown>
        </Button>
    );
};

export default MoreOptionsButton;