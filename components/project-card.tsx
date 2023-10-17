import Link from "next/link";
import { LinkIcon } from "@heroicons/react/24/outline";

type ProjectCardProps = {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  tags: string[];
  // width: string;
  // height: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  gitUrl,
  tags,
  // width,
  // height,
}) => {
  return (
    <div className={`max-w-xs items-center justify-center`}>
      <div
        className={`h-52 rounded-lg relative group`}
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div
          className="overlay items-center justify-center absolute top-0 left-0 rounded-lg w-full h-full bg-gray-700 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-40 transition-all duration-500"
          style={{
            WebkitBackdropFilter: "blur(2px)",
            backdropFilter: "blur(2px)",
            opacity: 1,
          }}
        >
          <Link
            href={gitUrl}
            className="h-11 w-11 mr-2 border-2 relative rounded-full border-stone-300 hover:border-white group/link transition-colors"
            target="_blank"
          >
            <LinkIcon className="h-7 w-7 text-stone-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white transition-colors" />
          </Link>
        </div>
      </div>
      <div className="text-white mt-3 py-1 px-1">
        <h5 className="font-semibold">{title}</h5>
        <div className="flex flex-wrap pb-1">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-stone-800 text-stone-300 text-xs font-light rounded-lg px-2 mr-2 mt-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm font-light">{description}</p>
      </div>
    </div>
  );
};
