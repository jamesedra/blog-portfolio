import { skillsData } from "@/lib/data";

export const Skills = () => {
  return (
    <div className="items-center justify-center rounded-2xl border border-zinc-700/40 p-6 max-w-[90%] sm:max-w-md mt-4 w-full h-full">
      <div className="font-semibold text-zinc-200">
        Languages, Frameworks, and Tools
      </div>
      <div className="flex flex-wrap pb-1 pt-2">
        {skillsData.map((tag, index) => (
          <span
            key={index}
            className="bg-neutral-800 text-neutral-400 text-sm rounded-lg px-2 py-1 mt-2 mr-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
