import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: Meta;
};

export default function PostList({ post }: Props) {
  const { id, title, date, tags, summary } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className=" mt-3 p-6 rounded-lg hover:bg-neutral-800 transition-colors">
      <div className="pb-2">
        <p className="text-xs text-stone-500 font-light">{formattedDate}</p>
        <div className="flex flex-wrap items-center pb-2">
          <Link
            href={`/posts/${id}`}
            className="text-lg font-semibold hover:text-stone-300 mr-4"
          >
            {title}
          </Link>
          <div>
            {" "}
            {/* Added marginLeft for spacing */}
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-stone-800 text-stone-300 text-xs rounded-full font-light px-2 mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="font-light text-sm text-stone-300">{summary}</p>
      </div>
      <a
        href={`/posts/${id}`}
        className="text-xs font-extralight text-stone-500 hover:text-stone-100 transition-colors"
      >
        Read More &gt;
      </a>
    </li>
  );
}
