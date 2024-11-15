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

const Projects: React.FC = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "80px",
      }}
    >
      <RainBackground />

      <Section>
        <Container
          style={{
            border: "1px solid white",
            borderRadius: "18px",
            padding: "24px",
            height: "fit-content",
            width: "1000px",
          }}
        >
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
        </Container>
      </Section>
      <Model open={open} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Projects;
