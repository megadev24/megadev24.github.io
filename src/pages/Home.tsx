import { CenteredContainer } from "../App.styled";
import { RouteProps } from "react-router-dom";
import styled from "@emotion/styled";

const Section = styled.section`
  align-self: center;
  align-items: center;
  color: white;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  max-width: 1000px;
  width: 80%;
`;

const Home: React.FC<RouteProps> = () => {
  return (
    <Section>
      <CenteredContainer></CenteredContainer>
    </Section>
  );
};

export default Home;
