import UserFilter from "../components/userFilter";
import { withPrismaErrorHandling } from "@/lib/prisma-utils";
import {
  getCachedPosts,
  getCachedUserById,
  getCachedUsers,
} from "@/lib/queries";
import PostHeader from "../components/postHeader";
import PostsGrid from "../components/postsGrid";
import { determinePageState } from "@/lib/state-logic";
import EmptyState from "../components/emptyState";

export default async function Posts({
  searchParams,
}: {
  searchParams: Promise<{ userId?: string }>;
}) {
  const userId = (await searchParams).userId;
  const validUserId = userId && !isNaN(Number(userId));

  // get all users
  const users = await withPrismaErrorHandling(
    () => getCachedUsers(),
    "fetching users",
    []
  );

  let userById;
  let posts;
  let totalPosts;

  if (validUserId) {
    // only get userById if id is present in search params
    userById = await withPrismaErrorHandling(
      () => getCachedUserById(userId),
      "fetching user",
      null
    );

    // get all posts
    posts = await withPrismaErrorHandling(
      () => getCachedPosts(userId),
      "fetching posts",
      []
    );
    totalPosts = posts.length;
  } else {
    // get all posts if no id is passed
    posts = await withPrismaErrorHandling(
      () => getCachedPosts(),
      "fetching posts",
      []
    );

    totalPosts = posts.length;
  }

  const pageState = determinePageState(userId, userById, posts);

  return (
    <div className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 px-6 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl">
      <PostHeader />

      {users.length > 0 && <UserFilter users={users} selectedUserId={userId} />}

      {posts && pageState === "posts" ? (
        <PostsGrid posts={posts} totalPosts={totalPosts} />
      ) : pageState === "user-not-found" ? (
        <EmptyState type="user-not-found" />
      ) : pageState === "no-posts" ? (
        <EmptyState type="no-posts" />
      ) : (
        <PostsGrid posts={posts} totalPosts={totalPosts} />
      )}
    </div>
  );
}
