import { ProjectCard } from "./project-card";
import { projectsData } from "@/lib/data";

export const RecentWorks = () => {
  const mostRecent = projectsData.slice(0, 3);
  return (
    <>
      <h2 className="flex text-lg items-center justify-center lg:justify-start font-semibold text-zinc-100 mb-4">
        Recent Works
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 items-center justify-center lg:justify-start gap-5 mx-5 sm:mx-0">
        {/* <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5"> */}
        {mostRecent.map((project) => (
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
      <br />
      <a
        href="/works"
        className="text-sm font-extralight text-stone-500 hover:text-stone-100 transition-colors mt-2 flex justify-center lg:justify-start lg:w-36"
      >
        View All Works &gt;
      </a>
    </>
  );
};
