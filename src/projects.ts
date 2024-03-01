export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  codeUrl: string;
}

export const projects: Project[] = [
  {
    title: "Project 1",
    description: "This is project 1",
    technologies: ["React", "TypeScript"],
    image: "https://via.placeholder.com/150",
    demoUrl: "https://example.com/demo",
    codeUrl: "https://example.com/code",
  },
  {
    title: "Project 2",
    description: "This is project 2",
    technologies: ["Vue", "JavaScript"],
    image: "https://via.placeholder.com/150",
    demoUrl: "https://example.com/demo",
    codeUrl: "https://example.com/code",
  },
];
