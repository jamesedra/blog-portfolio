import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import "highlight.js/styles/github-dark.css";

export const revalidate = 86400;

type Props = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta();

  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped!

  if (!post) notFound();

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>
      <span className="inline-block px-4 mx-1 bg-stone-800 font-light rounded-full text-zinc-200">
        {tag}
      </span>
    </Link>
  ));

  return (
    <section
      className="w-80 sm:w-fit sm:max-w-lg md:max-w-2xl m-6 mx-auto z-10 mt-16 md:mt-24"
      style={{ minHeight: "69vh" }}
    >
      <span className="text-zinc-600 text-xs font-light">Blog Post</span>
      <p className="text-stone-500 font-light mt-4 text-sm">{pubDate}</p>
      <h2 className="text-2xl text-stone-300 font-semibold sm:text-3xl mt-4 mb-5">
        {meta.title}
      </h2>

      <article className="prose lg:prose-lg prose-invert max-w-full overflow-x-auto  rounded-lg bg-neutral-800 px-7 py-7">
        {content}
      </article>

      <section className="text-stone-500 font-light">
        <h3 className="mt-6">Related:</h3>
        <p className="text-sm sm:mt-2">{tags}</p>
      </section>

      <p className="mt-6 text-stone-500 font-light">
        <Link href="/">← Back to home</Link>
      </p>
    </section>
  );
}
