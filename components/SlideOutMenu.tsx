import React, { useState } from "react";
import styled from "@emotion/styled";

interface MenuProps {
  isOpen: boolean;
}

const Menu = styled.div<MenuProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  background-color: #fff;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.2);
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
`;

const MenuButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  font-size: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;
`;

const Content = styled.div`
  position: relative;
  margin-left: 200px;
  padding: 20px;
`;

const SlideOutMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuButton onClick={toggleMenu}>
        ☰
      </MenuButton>
      <Menu isOpen={isOpen}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </Menu>
      <Content>
        <h1>Slide Out Menu Example</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt, diam eu auctor ultricies, nisl leo aliquam magna, id bibendum orci velit eget nisi. Nunc id dolor augue. Vivamus eu justo mi. Suspendisse porttitor nulla quis tellus gravida, at eleifend nibh egestas. Integer hendrerit risus ac aliquet lacinia.</p>
      </Content>
    </>
  );
};

export default SlideOutMenu;