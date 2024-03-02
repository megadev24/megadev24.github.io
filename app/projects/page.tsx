'use client'

import { Section, ProjectGrid, ProjectCard, Title, Description, Button } from "../../components/Header";
import { projects } from "../../utils/projects";


const Projects: React.FC = () => {
  return (
    <Section>
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
    </Section>
  );
};

export default Projects;
