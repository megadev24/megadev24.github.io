import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouteProps,
} from "react-router-dom";
import { Container, Header, Heading, Nav, StyledLink } from "./App.styled";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

interface Props {}

type CombinedProps = Props & RouteProps;

const App: React.FC<CombinedProps> = () => {
  const [isExpanded, setIsExpanded] = useState(false);


  return (
    <Router>
      <Container>
        <Header>
          <Heading
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >{isExpanded ? "Frederick P. Smeltzer" : "FPS"}</Heading>
          <Nav>
            {/* <StyledLink to="/">Home</StyledLink> */}
            <StyledLink to="/">About</StyledLink>
            <StyledLink to="/projects">Projects</StyledLink>
            {/* <StyledLink to="/contrabot">Contrabot</StyledLink> */}
          </Nav>
        </Header>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/contrabot" element={<div />} /> */}
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
