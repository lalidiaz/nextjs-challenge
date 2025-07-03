import PostCard from "./postCard";
import { PostCardProps } from "@/lib/types";

export default function PostsGrid({
  posts,
  totalPosts,
}: {
  posts: PostCardProps[];
  totalPosts?: number;
}) {
  return (
    <>
      <h3 className="text-white text-xl text-bold pt-12 font-bold">
        🔥 {totalPosts} total results 🔥
      </h3>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 sm:px-0 pt-20">
        {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
    </>
  );
}
