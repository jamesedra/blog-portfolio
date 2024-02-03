import { projectsData } from "@/lib/data";
import { designWorkData } from "@/lib/data";
import { researchData } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

export default function Works() {
  return (
    <section className="flex flex-col items-center md:flex-none md:items-start mt-24">
      <h2 className="text-lg font-semibold text-zinc-100">Work Archive</h2>
      <p className="text-sm text-center md:text-start text-zinc-500 font-light max-w-sm md:max-w-lg pb-10">
        a collection of personal and academic outputs.
      </p>
      <h3 className="font-semibold text-zinc-300 pb-2">Technical Works</h3>
      <p className="text-sm text-center md:text-start text-zinc-400 font-light pb-4 max-w-sm md:max-w-lg">
        a slow, but growing list of projects in software development.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            tags={Array.from(project.tags)}
            // width="72"
            // height="52"
          />
        ))}
      </div>
      <div className="border-t border-zinc-700/40 mt-14 mb-14 w-full"></div>
      <h3 className="font-semibold text-zinc-300 pb-2">
        Algorithms, Simulations, and Explorations
      </h3>
      <p className="text-sm text-center md:text-start text-zinc-400 font-light pb-4 max-w-sm md:max-w-lg">
        records of personal and academic skill development to build new things.
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
            // height="52"
          />
        ))}
      </div>
      <div className="border-t border-zinc-700/40 mt-14 mb-14 w-full"></div>
      <h3 className="font-semibold text-zinc-300 pb-2">
        Previous Digital Design Works
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
            // height="52"
          />
        ))}
      </div>
    </section>
  );
}
