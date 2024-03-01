import { Section, ProjectGrid, ProjectCard, Title, Description, Button } from "../App.styled";
import { RouteProps } from "react-router-dom";
import { projects } from "../projects";


const Projects: React.FC<RouteProps> = () => {
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
