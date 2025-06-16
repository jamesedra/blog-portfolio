export const ueData = [
  {
    id: 1,
    title: "Enhanced Auditory Reality Simulation for Improved Mapping",
    description:
      "A sound localization evaluation tool. Developed the weather system, flora and fauna instancing tools, material texturing, and UI functionalities.",
    tags: [
      "Virtual Reality",
      "C++",
      "Blueprints",
      "PCG",
      "HLSL",
      "Niagara System",
    ],
    gitUrl:
      "https://eml.ubc.ca/projects/enhanced-auditory-reality-simulation-for-improved-mapping-earsim/",
    image: "/images/brief-earsim.gif",
  },
  {
    id: 2,
    title: "Procedural Poetry Playhouse",
    description:
      "An application for the UBC Creative Writing faculty. Developed maze generating algorithms, object instancing systems, and UI functionalities.",
    tags: ["Virtual Reality", "C++", "Blueprints"],
    gitUrl: "https://eml.ubc.ca/projects/procedural-poetry-playhouse/",
    image: "/images/poetry.png",
  },
] as const;

export const renderingData = [
  {
    id: 1,
    title: "Physically-based Rendering Engine",
    description:
      "An OpenGL ECS graphics engine for learning how graphics engines can be built and structured. Supports deferred rendering, material systems, model loading, image-based lighting, shadow mapping, and terrain systems.",
    tags: [
      "OpenGL",
      "C++",
      "ImGui",
      "Physically-based Rendering",
      "Engine Development",
    ],
    gitUrl: "https://github.com/jamesedra/Engine-0",
    image: "/images/engine-0.png",
  },
  {
    id: 2,
    title: "3D Pixel Art Rendering Pipeline",
    description:
      "A pipeline from rendering techniques to create a pixel art aesthetic. Material and post-process shading consists of quantization, edge detection, real-time reflections, and raymarching.",
    tags: [
      "Unreal Engine 5",
      "HLSL",
      "Non-photorealistic Rendering",
      "Post-processing",
    ],
    gitUrl: "https://www.artstation.com/artwork/rl09ve",
    image: "/images/ray-marching.gif",
  },
  {
    id: 3,
    title: "Physically-Based Moebius Shading",
    description:
      "A post-processing shader that focuses on producing outlines and procedural hatching. The output creates a two-layered, physically-based, cel shading which retains all of the lighting data to create an accurate, illustration effect.",
    tags: [
      "Unreal Engine 5",
      "HLSL",
      "Non-photorealistic Rendering",
      "Post-processing",
    ],
    gitUrl: "",
    image: "/images/moebius.gif",
  },
  {
    id: 4,
    title: "Multi-pass Painterly Shading",
    description:
      "A multi-pass anisotropic kuwahara filter. Uses Unreal Engine 5.5's user texture input feature on post processing materials, making it possible to store and organize sobel, gaussian, and kuwahara filters in different passes.",
    tags: [
      "Unreal Engine 5",
      "HLSL",
      "Non-photorealistic Rendering",
      "Post-processing",
    ],
    gitUrl: "",
    image: "/images/painterly.gif",
  },
] as const;

export const toolsData = [
  {
    id: 1,
    title: "Procedural Environment Generation Tool",
    description:
      "A PCG tool that uses a multi-layered noise mapping algorithm for mesh and assembly instancing.",
    tags: ["Unreal Engine 5", "PCG", "Blueprints"],
    gitUrl: "https://www.artstation.com/artwork/zxkWO4",
    image: "/images/pcg2.jpg",
  },
  {
    id: 2,
    title: "Night Sky System",
    description:
      "A tool to easily calibrate the night sky built for a sky sphere material. Involves moon phase shading.",
    tags: ["Unreal Engine 5", "Blueprints", "HLSL"],
    gitUrl: "",
    image: "/images/moonsettingsdemo.gif",
  },
] as const;

export const researchData = [
  {
    id: 1,
    title: "Advanced Lighting from Learn OpenGL",
    description:
      "Learning outputs that uses PBR, IBL, and deferred shading concepts from Learn OpenGL.",
    tags: ["OpenGL", "C++", "GLSL", "Physically-based Rendering"],
    gitUrl: "https://github.com/jamesedra/OpenGL-Lighting",
    image: "/images/pbr.png",
  },
  {
    id: 2,
    title: "Tilemap Art Study - Ambience",
    description:
      "A style study composition based on modern 2D pixel games focusing on ambient environments.",
    tags: ["Research", "Aseprite", "Pixel Art"],
    gitUrl: "",
    image: "/images/design-concept.PNG",
  },
  {
    id: 3,
    title: "Parametric Surfaces Application",
    description:
      "A short simulation app animating optimized mathematical surfaces.",
    tags: ["Unity", "C#", "HLSL"],
    gitUrl: "https://github.com/jamesedra/Parametric-Surfaces",
    image: "/images/parametric.gif",
  },

  {
    id: 4,
    title: "Organic Fractal Simulation",
    description:
      "Procedurally generating a depth-based colored, 3D organic Sierpinski Pyramid.",
    tags: ["Unity", "C#", "HLSL"],
    gitUrl: "https://github.com/jamesedra/Organic-Fractal-Simulation",
    image: "/images/FractalShowcase.gif",
  },
] as const;

export const designWorkData = [
  {
    id: 1,
    title: "Minecraft Education Learning Portal",
    description:
      "researched and developed an innovative hub server framework for Minecraft Education.",
    tags: ["Research", "Hub Server Design", "SketchUp"],
    gitUrl:
      "https://www.canva.com/design/DAFfqTU6UjI/2PeRYhAO6l3mR_XgzNkebw/view?utm_content=DAFfqTU6UjI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    image: "/images/Minecraft.gif",
  },

  {
    id: 2,
    title: "Puntahanan: a design framework",
    description:
      "a study on reconsidering voids from light industry locations.",
    tags: ["Research", "Archived", "Urban Design"],
    gitUrl: "https://arch.benilde.edu.ph/puntahan-by-edralin-delsther-james/",
    image: "/images/Thesis.jpg",
  },
  {
    id: 3,
    title: "Adriatiko",
    description: "experimenting placemaking theory on abandoned streetscapes.",
    tags: ["Archived", "Streetscape Design", "SketchUp"],
    gitUrl:
      "https://www.canva.com/design/DAFxbB3pF5o/popGMc8M5GHNmri2XBXaDA/view?utm_content=DAFxbB3pF5o&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    image: "/images/Adriatiko.gif",
  },
  {
    id: 4,
    title: "Laguna Industrial Town Design",
    description:
      "allocating community spaces for unused plots via urban plan strategies.",
    tags: ["Archived", "Urban Design"],
    gitUrl:
      "https://www.canva.com/design/DAFxbB3pF5o/popGMc8M5GHNmri2XBXaDA/view?utm_content=DAFxbB3pF5o&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    image: "/images/UrbanPlan.gif",
  },
] as const;

export const recentData = [
  {
    id: 1,
    title: "Physically-based Rendering Engine",
    description:
      "An OpenGL ECS graphics engine for learning how graphics engines can be built and structured. Supports deferred rendering, material systems, model loading, image-based lighting, shadow mapping, and terrain systems.",
    tags: [
      "OpenGL",
      "C++",
      "ImGui",
      "Physically-based Rendering",
      "Engine Development",
    ],
    gitUrl: "https://github.com/jamesedra/Engine-0",
    image: "/images/crop-engine.png",
  },
  {
    id: 2,
    title: "3D Pixel Art Rendering Pipeline",
    description:
      "A pipeline from rendering techniques to create a pixel art aesthetic. Material and post-process shading consists of quantization, edge detection, real-time reflections, and raymarching.",
    tags: [
      "Unreal Engine 5",
      "HLSL",
      "Non-photorealistic Rendering",
      "Post-processing",
    ],
    gitUrl: "https://www.artstation.com/artwork/rl09ve",
    image: "/images/ray-marching.gif",
  },
  {
    id: 3,
    title: "Enhanced Auditory Reality Simulation for Improved Mapping",
    description:
      "A sound localization evaluation tool. Developed the weather system, flora and fauna instancing tools, material texturing, and UI functionalities.",
    tags: [
      "Unreal Engine 5",
      "C++",
      "Blueprints",
      "PCG",
      "HLSL",
      "Niagara System",
    ],
    gitUrl:
      "https://eml.ubc.ca/projects/enhanced-auditory-reality-simulation-for-improved-mapping-earsim/",
    image: "/images/brief-earsim.gif",
  },
  {
    id: 4,
    title: "Advanced Lighting from Learn OpenGL",
    description:
      "Learning outputs that uses PBR, IBL, and deferred shading concepts from Learn OpenGL.",
    tags: ["OpenGL", "C++", "GLSL", "Physically-based Rendering"],
    gitUrl: "https://github.com/jamesedra/OpenGL-Lighting",
    image: "/images/pbr.png",
  },
  {
    id: 5,
    title: "Procedural Environment Generation Tool",
    description:
      "A PCG tool that uses a multi-layered noise mapping algorithm for mesh and assembly instancing.",
    tags: ["Unreal Engine 5", "PCG", "Blueprints"],
    gitUrl: "https://www.artstation.com/artwork/zxkWO4",
    image: "/images/pcg2.jpg",
  },
  {
    id: 6,
    title: "Night Sky System",
    description:
      "A tool to easily calibrate the night sky built for a sky sphere material. Involves moon phase shading.",
    tags: ["Unreal Engine 5", "Blueprints", "HLSL"],
    gitUrl: "https://www.artstation.com/artwork/vbZwN3",
    image: "/images/moonsettingsdemo.gif",
  },
] as const;

export const skillsData = [
  "Unreal Engine 5",
  "Blueprints",
  "C++",
  "OpenGL",
  "HLSL",
  "GLSL",
  "Shader Graph",
  "Substance",
  "Blender",
  "Aseprite",
  "Git",
  "Perforce",
] as const;

export const projectsData = [
  {
    id: 1,
    title: "3D Paddle Play",
    description:
      "a Pong clone in 3D pixel art made in Unity Universal Render Pipeline",
    tags: ["Unity", "C#", "Cg"],
    gitUrl: "https://github.com/jamesedra/3D-Paddle-Play",
    image: "/images/paddleplay.gif",
  },

  {
    id: 2,
    title: "Book Marker",
    description:
      "an application to track books and maintain a personal library",
    tags: ["Java"],
    gitUrl: "https://github.com/jamesedra/Book-Marker",
    image: "/images/BookMarker.PNG",
  },
  {
    id: 3,
    title: "Personal Website",
    description:
      "personal blog and portfolio built in Next.js with pseudorandom particle effects",
    tags: ["React", "TypeScript", "Next.js", "Node.js"],
    gitUrl: "https://github.com/jamesedra/blog-portfolio",
    image: "/images/website.gif",
  },
  {
    id: 4,
    title: "Wag&Trails CRUD Web Application",
    description:
      "A dog walking social application built in React, Node.js, and PostgreSQL.",
    tags: ["React", "JavaScript", "Node.js", "PostgreSQL"],
    gitUrl: "https://github.com/jamesedra/CRUD-Project-Prototype",
    image: "/images/CRUD.gif",
  },
] as const;
/*
export const projectsData = [
  {
    id: 1,
    title: "3D Paddle Play",
    description:
      "a Pong clone in 3D pixel art made in Unity Universal Render Pipeline",
    tags: ["Unity", "C#", "Cg"],
    gitUrl: "https://github.com/jamesedra/3D-Paddle-Play",
    image: "/images/paddleplay.gif",
  },
  {
    id: 2,
    title: "Parametric Surfaces Application",
    description:
      "a short simulation app animating optimized mathematical surfaces",
    tags: ["Unity", "C#", "Cg", "HLSL"],
    gitUrl: "https://github.com/jamesedra/Parametric-Surfaces",
    image: "/images/parametric.gif",
  },
  {
    id: 3,
    title: "Book Marker",
    description:
      "an application to track books and maintain a personal library",
    tags: ["Java"],
    gitUrl: "https://github.com/jamesedra/Book-Marker",
    image: "/images/BookMarker.PNG",
  },
  {
    id: 4,
    title: "Personal Website",
    description:
      "personal blog and portfolio built in Next.js with pseudorandom particle effects",
    tags: ["React", "TypeScript", "Next.js", "Node.js"],
    gitUrl: "https://github.com/jamesedra/blog-portfolio",
    image: "/images/website.gif",
  },
  {
    id: 5,
    title: "Wag&Trails CRUD Web Application",
    description:
      "A dog walking social application built in React, Node.js, and PostgreSQL.",
    tags: ["React", "JavaScript", "Node.js", "PostgreSQL"],
    gitUrl: "https://github.com/jamesedra/CRUD-Project-Prototype",
    image: "/images/CRUD.gif",
  },
] as const;

export const researchData = [
  {
    id: 1,
    title: "Organic Fractal Simulation",
    description:
      "procedurally generating a depth-based colored, 3D organic Sierpinski Pyramid",
    tags: ["Unity", "C#", "Cg", "HLSL"],
    gitUrl: "https://github.com/jamesedra/Organic-Fractal-Simulation",
    image: "/images/FractalShowcase.gif",
  },
  {
    id: 2,
    title: "Hashing Case Study",
    description: "visualizing pseudorandomness using hash values in a 3D plane",
    tags: ["Unity", "C#", "Cg", "HLSL"],
    gitUrl: "https://github.com/jamesedra/Hashing",
    image: "/images/DomainTRS.gif",
  },
  {
    id: 3,
    title: "QuadTree Pruning",
    description: "a color quantization algorithm tested to compress images",
    tags: ["C++"],
    gitUrl: "https://github.com/jamesedra/QuadTree-Pruning-System",
    image: "/images/QuadTree.gif",
  },
  {
    id: 4,
    title: "Stack and Queue Flood Fills",
    description:
      "exploring fill algorithms, from depth and breadth-first searches",
    tags: ["C++", "ImageMagick"],
    gitUrl: "https://github.com/jamesedra/Stack-Queue-and-Flood-Fill",
    image: "/images/FloodFillCut.gif",
  } /*,
  {
    id: 5,
    title: "Pixel Manipulation",
    description:
      "a short exercise on handling images divided and stored in lists",
    tags: ["C++"],
    gitUrl: "https://github.com/jamesedra/Pixel-Manipulation",
    image: "/images/pixel.png",
  },
] as const;

export const designWorkData = [
  {
    id: 1,
    title: "Minecraft Education Learning Portal",
    description:
      "researched and developed an innovative hub server framework for Minecraft Education",
    tags: ["Research", "Hub Server Design", "SketchUp"],
    gitUrl:
      "https://www.canva.com/design/DAFfqTU6UjI/2PeRYhAO6l3mR_XgzNkebw/view?utm_content=DAFfqTU6UjI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    image: "/images/Minecraft.gif",
  },
  {
    id: 2,
    title: "Tilemap Art Study - Ambience",
    description:
      "a style study composition based on modern 2D pixel games focusing on ambient environments",
    tags: ["Research", "Aseprite", "Pixel Art"],
    gitUrl:
      "https://raw.githubusercontent.com/jamesedra/blog-portfolio/master/public/images/design-concept.PNG",
    image: "/images/design-concept.PNG",
  },
  {
    id: 3,
    title: "Puntahanan: a design framework",
    description: "a study on reconsidering voids from light industry locations",
    tags: ["Research", "Archived", "Urban Design"],
    gitUrl: "https://arch.benilde.edu.ph/puntahan-by-edralin-delsther-james/",
    image: "/images/Thesis.jpg",
  },
  {
    id: 4,
    title: "Adriatiko",
    description: "experimenting placemaking theory on abandoned streetscapes",
    tags: ["Archived", "Streetscape Design", "SketchUp"],
    gitUrl:
      "https://www.canva.com/design/DAFxbB3pF5o/popGMc8M5GHNmri2XBXaDA/view?utm_content=DAFxbB3pF5o&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    image: "/images/Adriatiko.gif",
  },
  {
    id: 5,
    title: "Laguna Industrial Town Design",
    description:
      "allocating community spaces for unused plots via urban plan strategies",
    tags: ["Archived", "Urban Design"],
    gitUrl:
      "https://www.canva.com/design/DAFxbB3pF5o/popGMc8M5GHNmri2XBXaDA/view?utm_content=DAFxbB3pF5o&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    image: "/images/UrbanPlan.gif",
  },
] as const; 
 */
