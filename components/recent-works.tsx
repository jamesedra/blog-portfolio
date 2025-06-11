import { ProjectCard } from "./project-card";
import { recentData } from "@/lib/data";

export const RecentWorks = () => {
  const mostRecent = recentData.slice(0, 3);
  const maxDescriptionLength = 80;

  return (
    <>
      <h2 className="flex text-lg items-center justify-center lg:justify-start font-semibold text-zinc-100 mb-4">
        Recent Works
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 items-start justify-center lg:justify-start gap-5 mx-5 sm:mx-0">
        {mostRecent.map((project) => {
          const tagsToShow =
            project.tags.length > 2
              ? [...project.tags.slice(0, 2), "..."]
              : project.tags;

          const truncatedDescription =
            project.description.length > maxDescriptionLength
              ? project.description.slice(0, maxDescriptionLength) + "..."
              : project.description;

          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={truncatedDescription}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              tags={Array.from(tagsToShow)}
            />
          );
        })}
      </div>
      <br />
      <a
        href="/works"
        className="text-sm font-extralight text-stone-500 hover:text-stone-100 transition-colors mt-0 flex justify-center lg:justify-start lg:w-36"
      >
        View All Works &gt;
      </a>
    </>
  );
};
