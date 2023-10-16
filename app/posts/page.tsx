import { getPostsMeta } from "@/lib/posts";
import PostList from "@/components/post-list";

export default async function Posts() {
  const posts = await getPostsMeta();

  if (!posts) {
    return (
      <p className="mt-10 text-center text-white">Sorry, no posts available.</p>
    );
  }
  return (
    <section
      className="flex flex-col items-center md:flex-none md:items-start max-w-xl mt-16 md:mt-24 z-20"
      style={{ minHeight: "72vh" }}
    >
      <h2 className="text-lg font-semibold text-zinc-100 pb-3">Blog Posts</h2>
      <p className="text-sm text-center md:text-start text-zinc-500 font-light max-w-sm md:max-w-lg">
        a few in-depth reflections on current projects, as well as updates for
        this website.
      </p>
      <div className="text-zinc-100">
        <ul className="list-none">
          {posts.map((post) => (
            <PostList key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </section>
  );
}
