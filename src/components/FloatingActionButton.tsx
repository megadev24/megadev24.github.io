import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  background-color: #0077cc;
  color: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  font-weight: 600;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: #005ea8;
  }
`;

const FloatingActionButton: React.FC = () => {
  return (
    <StyledButton>
      <i className="fas fa-envelope"></i>
    </StyledButton>
  );
};

export default FloatingActionButton;
