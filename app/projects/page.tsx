"use client";

import {
  Container,
  Section,
  ProjectGrid,
  ProjectCard,
  Title,
  Tech,
  Description,
  Button,
} from "../../components/StyledComponents";
import { useState } from "react";
import { projects } from "../../utils/projects";
import Model from "@/components/Model";
import RainBackground from "@/components/RainBackground";
import styled from "@emotion/styled";

const ProjectsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
`;

const StyledContainer = styled(Container)`
  border: 1px solid white;
  border-radius: 18px;
  padding: 24px;
  height: fit-content;
  margin: 0 24px;
`;

const Projects: React.FC = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <ProjectsContainer>
      <RainBackground />
      <Section>
        <StyledContainer>
          <ProjectGrid>
            {projects?.map((project) => (
              <ProjectCard key={project.title}>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
                <Tech>
                  {project.technologies.map((e, i) =>
                    i < project.technologies.length - 1 ? `${e}, ` : `${e}`
                  )}
                </Tech>
                <Container>
                  {project.demoUrl && (
                    <Button
                      onClick={() => window.open(project.demoUrl, "_blank")}
                    >
                      Learn More
                    </Button>
                  )}
                  {project.codeUrl && project.public && (
                    <Button
                      style={{ backgroundColor: "gold", color: "black" }}
                      onClick={() => window.open(project.codeUrl, "_blank")}
                    >
                      Code
                    </Button>
                  )}
                  {project.codeUrl && !project.public && (
                    <Button
                      style={{ backgroundColor: "gold", color: "black" }}
                      onClick={() => setIsOpen(true)}
                    >
                      Request Access
                    </Button>
                  )}
                </Container>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </StyledContainer>
      </Section>
      <Model open={open} setIsOpen={setIsOpen} />
    </ProjectsContainer>
  );
};

export default Projects;