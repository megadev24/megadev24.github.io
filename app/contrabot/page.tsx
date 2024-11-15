"use client";

import RainBackground from "@/components/RainBackground";
import { FlexContainer } from "@/components/StyledComponents";
import React from "react";

const Contrabot = () => {
  return (
    <main>
      <RainBackground />
      <FlexContainer style={{ color: "red" }}>
        This is currently under development
      </FlexContainer>
    </main>
  );
};

export default Contrabot;
