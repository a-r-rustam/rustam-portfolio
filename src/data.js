// ============================================================
// PORTFOLIO DATA — Edit everything here!
// ============================================================

// ---- PERSONAL INFO ----
export const personalInfo = {
  name: "Abdul Rahman",
  logo: "Rustam",          // Name shown in navbar logo
  tagline: "3D Modeling. UI/UX. Web Design.",
  bio: "I'm a self-taught 3D artist working in Blender — transforming default cubes into detailed worlds, one node at a time. A self-taught exploration of 3D art and visual storytelling.",
  email: "abdulrahmanrustam71@gmail.com",              // ← Change this
  linkedin: "https://www.linkedin.com/in/abdul-rahman-rustam-b1283537a/",
  instagram: "https://www.instagram.com/ar___rustam/",
  github: "https://github.com/raullenchai",         // ← Change this
  youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",       // ← Change this
};


export const skills = {
  category1: {
    title: "3D & Visual Arts",
    items: [
      { name: "Blender 3D", level: 10 },
      { name: "3D Modeling", level: 15 },
      { name: "Texturing & Shading", level: 8 },
      { name: "Lighting & Rendering", level: 25 },
      { name: "Compositing", level: 30 },
    ],
  },
  category2: {
    title: "UI/UX Design",
    items: [
      { name: "Figma", level: 85 },
      { name: "UI Design", level: 80 },
      { name: "UX Research", level: 70 },
      { name: "Prototyping", level: 75 },
      { name: "Adobe XD", level: 65 },
    ],
  },
  category3: {
    title: "Tools & Workflow",
    tags: ["Photoshop", "Illustrator", "After Effects", "Premiere Pro", "VS Code", "Git / GitHub", "Notion", "Canva"],
  },
};


export const projects = [
  {
    id: 1,
    title: "3D Environment — Free Addons",
    description: "A detailed addon list for environment built in Blender with realistic lighting, volumetric fog, and procedural textures.",
    image: "src/assets/Project 1.png",          // e.g. "/projects/forest.jpg"
    tags: ["Blender", "3D Art", "Lighting"],
    projectUrl: "https://www.youtube.com/watch?v=Cw7HPJwfsw0",   // ← Paste your project link here
  },
  {
    id: 2,
    title: "Character Design — Sci-Fi Suit",
    description: "Hard-surface character model with intricate mechanical details, fully rigged and rendered in Cycles.",
    image: "src/assets/cp.jpg",
    tags: ["Blender", "Character", "Hard Surface"],
    projectUrl: "https://behance.net",
  },
  {
    id: 3,
    title: "UI/UX — Task Manager App",
    description: "A clean and minimal task management app designed in Figma with dark mode, full prototype, and component library.",
    image: "src/assets/TM.webp",
    tags: ["Figma", "UI/UX", "App Design"],
    projectUrl: "https://behance.net",
  },
  {
    id: 4,
    title: "Brand Identity — Logo & Visual",
    description: "Complete brand identity package including logo design, color palette, typography, and brand guidelines.",
    image: "src/assets/brand.avif",
    tags: ["Branding", "Illustrator", "Logo"],
    projectUrl: "https://behance.net",
  },
  {
    id: 5,
    title: "Motion — Product Visualization",
    description: "Product 3D animation and visualization for a concept smart device, rendered with photorealistic materials.",
    image: "src/assets/illusion.jpg",
    tags: ["Blender", "Motion", "3D"],
    projectUrl: "https://behance.net",
  },
  {
    id: 6,
    title: "Web Design — Personal Portfolio",
    description: "This very portfolio website — designed in Figma and built with Vite + React, responsive and blazing fast.",
    image: "src/assets/Port.png",
    tags: ["Web Design", "React", "Figma"],
    projectUrl: "http://localhost:5173/#about",
  },
];