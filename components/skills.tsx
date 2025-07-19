import { skillsData } from "@/lib/data";
import { twMerge } from "tailwind-merge"; // handy but optional

export const Skills = () => {
  return (
    <section className="w-full sm:w-[28rem] rounded-2xl border border-zinc-700/40 p-6 mt-4">
      <h2 className="font-semibold text-zinc-200">
        Skills, Languages, Frameworks<span className="hidden sm:inline">,</span>{" "}
        <wbr />
        and Tools
      </h2>

      <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-3">
        {skillsData.map((tag) => (
          <li key={tag}>
            <Tag label={tag} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const Tag = ({ label }: { label: string }) => {
  const hue =
    label.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360;

  return (
    <span
      className={twMerge(
        // ↓ changed only this line
        "inline-flex items-center rounded-lg px-3 py-1",
        "text-[13px] sm:text-sm font-medium text-zinc-300",
        "bg-zinc-800/60 backdrop-blur ring-1 ring-inset",
        `ring-[hsl(${hue}deg_20%_50%)/25%] shadow-[0_0_0_1px_hsl(${hue}deg_20%_50%)/15%]`,
        "transition-all duration-150 ease-out hover:bg-zinc-700/60 hover:text-zinc-50",
        "hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(${hue}deg_20%_70%)/80%]"
      )}
    >
      {label}
    </span>
  );
};
