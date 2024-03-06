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
            width: "1000px",
          }}
        >
          <ProjectGrid>
            {projects?.map((project) => (
              <ProjectCard key={project.title}>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
                <Tech>{project.technologies.map((e,i) => i < project.technologies.length-1 ? `${e}, ` : `${e}`)}</Tech>
                <Container>
                  {project.demoUrl && (
                    <Button
                      onClick={() => window.open(project.demoUrl, "_blank")}
                    >
                      Learn More
                    </Button>
                  )}
                  {project.codeUrl && (
                    <Button
                      style={{ backgroundColor: "gold", color: "black"}}
                      onClick={() => window.open(project.codeUrl, "_blank")}
                    >
                      Code
                    </Button>
                  )}
                </Container>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </Container>
      </Section>
    </div>
  );
};

export default Projects;
