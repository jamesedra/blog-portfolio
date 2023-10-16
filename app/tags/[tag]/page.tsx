import { getPostsMeta } from "@/lib/posts";
import PostList from "@/components/post-list";
import Link from "next/link";

export const revalidate = 86400;

type Props = {
  params: {
    tag: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta();

  if (!posts) return [];

  const tags = new Set(posts.map((post) => post.tags).flat());

  return Array.from(tags).map((tag) => ({ tag }));
}

export function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Posts about ${tag}`,
  };
}

export default async function TagPostList({ params: { tag } }: Props) {
  const posts = await getPostsMeta();

  if (!posts)
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;

  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className="text-center">
        <p className="mt-10">Sorry, no posts for that keyword.</p>
        <Link href="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <section
      className="flex flex-col items-center md:flex-none md:items-start max-w-xl mt-16 md:mt-24 z-20"
      style={{ minHeight: "72vh" }}
    >
      <h2 className="font-semibold text-zinc-400 mt-4 mb-0">
        Results for: #{tag}
      </h2>
      <section className="mt-2 mx-auto">
        <ul className="text-zinc-100 list-none">
          {tagPosts.map((post) => (
            <PostList key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </section>
  );
}
