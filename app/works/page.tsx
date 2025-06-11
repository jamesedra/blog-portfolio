import { projectsData } from "@/lib/data";
import { ueData } from "@/lib/data";
import { renderingData } from "@/lib/data";
import { toolsData } from "@/lib/data";
import { designWorkData } from "@/lib/data";
import { researchData } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

export default function Works() {
  return (
    <section className="flex flex-col items-center md:flex-none md:items-start mt-24">
      <h2 className="text-lg font-semibold text-zinc-100">Work and Projects</h2>
      <p className="text-sm text-center md:text-start text-zinc-500 font-light max-w-sm md:max-w-lg pb-10">
        A collection of personal, professional, and academic work. It is not
        forcefully in chronological order, but it is categorized on my
        experiences from design, VR development, to graphics programming.
      </p>
      <h3 className="font-semibold text-zinc-300 pb-2">
        Unreal Engine Development
      </h3>
      <p className="text-sm text-center md:text-start text-zinc-400 font-light pb-4 max-w-sm md:max-w-lg">
        currently focused on educational technology shipped outputs in Virtual
        Reality.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
        {ueData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            tags={Array.from(project.tags)}
            // width="72"
            height="h-64"
          />
        ))}
      </div>
      <div className="border-t border-zinc-700/40 mt-14 mb-14 w-full"></div>
      <h3 className="font-semibold text-zinc-300 pb-2">
        Rendering and Shader Development
      </h3>
      <p className="text-sm text-center md:text-start text-zinc-400 font-light pb-4 max-w-sm md:max-w-lg">
        programs with a goal on producing creative visual media.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
        {renderingData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            tags={Array.from(project.tags)}
            // width="72"
            height="h-64"
          />
        ))}
      </div>
      <div className="border-t border-zinc-700/40 mt-14 mb-14 w-full"></div>

      <h3 className="font-semibold text-zinc-300 pb-2">
        Procedural Tools and Systems
      </h3>
      <p className="text-sm text-center md:text-start text-zinc-400 font-light pb-4 max-w-sm md:max-w-lg">
        sub-features and tools developed for streamlining projects.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
        {toolsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            tags={Array.from(project.tags)}
            // width="72"
            height="h-64"
          />
        ))}
      </div>
      <div className="border-t border-zinc-700/40 mt-14 mb-14 w-full"></div>
      <h3 className="font-semibold text-zinc-300 pb-2">
        Simulations and Explorations
      </h3>
      <p className="text-sm text-center md:text-start text-zinc-400 font-light pb-4 max-w-sm md:max-w-lg">
        records of learning to build new things.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
        {researchData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            tags={Array.from(project.tags)}
            // width="72"
            height="h-64"
          />
        ))}
      </div>
      <div className="border-t border-zinc-700/40 mt-14 mb-14 w-full"></div>
      <h3 className="font-semibold text-zinc-300 pb-2">
        3D Modelling and Digital Design
      </h3>
      <p className="text-sm text-center md:text-start text-zinc-400 font-light pb-4 max-w-sm md:max-w-lg">
        problem solving and creative thinking in visual mediums.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
        {designWorkData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            tags={Array.from(project.tags)}
            // width="72"
            height="h-64"
          />
        ))}
      </div>
    </section>
  );
}
