"use client";

import {
  Container,
  Section,
  ProjectGrid,
  ProjectCard,
  Title,
  Description,
  Button,
} from "../../components/Header";
import { projects } from "../../utils/projects";

const Projects: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "80px",
      }}
    >
      <Section>
        <Container
          style={{
            border: "1px solid white",
            borderRadius: "18px",
            padding: "24px",
            height: "fit-content",
          }}
        >
          <ProjectGrid>
            {projects?.map((project) => (
              <ProjectCard key={project.title}>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
                <Button onClick={() => window.open(project.codeUrl, "_blank")}>
                  Learn More
                </Button>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </Container>
      </Section>
    </div>
  );
};

export default Projects;
