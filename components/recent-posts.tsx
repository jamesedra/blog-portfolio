import { getPostsMeta } from "@/lib/posts";
import PostList from "./post-list";

export default async function RecentPosts() {
  const posts = await getPostsMeta();

  if (!posts) {
    return (
      <section className="lg:mr-16">
        <h2 className="flex text-lg items-center justify-center lg:justify-start font-semibold text-zinc-100 mb-2">
          Recent Posts
        </h2>
        <p className="mt-12 text-center lg:text-start lg:ml-4">
          Sorry, posts are currently in the works.
        </p>{" "}
      </section>
    );
  }

  return (
    <section className="sm:mx-14 md:mx-0 lg:mr-16">
      <h2 className="flex text-lg items-center justify-center lg:justify-start font-semibold text-zinc-100 mb-2">
        Recent Posts
      </h2>
      <ul className="list-none">
        {posts.map((post) => (
          <PostList key={post.id} post={post} />
        ))}
      </ul>
      <br />
      <a
        href="/posts"
        className="text-sm font-extralight text-stone-500 hover:text-stone-100 transition-colors mt-2 flex justify-center lg:justify-start lg:w-36"
      >
        View All Posts &gt;
      </a>
    </section>
  );
}
