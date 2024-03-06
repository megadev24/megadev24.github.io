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
    title: "EchoAnime",
    description:
      "A web application for anime fans to discover new anime and keep track of their watch history. Users can also create and join groups to discuss their favorite anime.",
    technologies: [
      "React",
      "TypeScript",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
    ],
    image: "https://via.placeholder.com/150",
    demoUrl: "",
    codeUrl: "",
  },
  {
    title: "TUNA",
    description: "Tournament web application to organize and manage tournaments for various games.",
    technologies: ["Nest", "TypeScipt", "React"],
    image: "https://via.placeholder.com/150",
    demoUrl: "",
    codeUrl: "https://github.com/megadev24/TUNA",
  },
  {
    title: "Portfolio",
    description: "Personal portfolio website to showcase my work, tell people a little more about myself, and connect with others.",
    technologies: ["Next", "TypeScript", "React"],
    image: "https://via.placeholder.com/150",
    demoUrl: "https://fpsmeltzer.me",
    codeUrl: "https://github.com/megadev24/megadev24.github.io",
  },
  {
    title: "TBA",
    description: "A suspenseful text-based adventure game that leverages sound to still images to create an immersive experience.",
    technologies: ["React", "Typescript"],
    image: "https://via.placeholder.com/150",
    demoUrl: "",
    codeUrl: "https://github.com/megadev24/text-based-adventure",
  },
  {
    title: "Thunder Bear",
    description: "2D Hero platformer game where the player controls a bear with the power of thunder to defeat enemies and reach the end of the level.",
    technologies: ["C#"],
    image: "https://via.placeholder.com/150",
    demoUrl: "",
    codeUrl: "",
  },
  {
    title: "Coma",
    description: "Top-down 2D game where the player controls a character in a coma and must navigate through a maze of distorted memories to escape.",
    technologies: ["Idk", "IDK"],
    image: "https://via.placeholder.com/150",
    demoUrl: "",
    codeUrl: "",
  },
  {
    title: "Trust",
    description: "2D platformer where 2 players work together to ascend a single very tall level to reach the end",
    technologies: ["Idk", "IDK"],
    image: "https://via.placeholder.com/150",
    demoUrl: "",
    codeUrl: "",
  },
];
