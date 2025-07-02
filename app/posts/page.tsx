import { prisma } from "@/lib/prisma";
import UserFilter from "../components/userFilter";
import PostCard from "../components/postCard";
import { withPrismaErrorHandling } from "@/lib/prisma-utils";

export default async function Posts({
  searchParams,
}: {
  searchParams: { userId?: string };
}) {
  // get all users
  const users = await withPrismaErrorHandling(
    () =>
      prisma.user.findMany({
        select: {
          id: true,
          name: true,
          username: true,
        },
        orderBy: {
          name: "asc",
        },
      }),
    "fetching users",
    []
  );

  const userId = searchParams.userId
    ? parseInt(searchParams.userId)
    : undefined;

  const posts = await withPrismaErrorHandling(
    () =>
      prisma.post.findMany({
        where: userId ? { userId } : undefined,
        include: {
          user: {
            select: {
              id: true,
              name: true,
              username: true,
            },
          },
        },
        orderBy: {
          id: "asc",
        },
      }),
    "fetching posts",
    []
  );

  const totalPosts = posts.length;

  return (
    <div className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 px-6 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl">
      <div className="py-6 px-6 text-center">
        <h1 className="text-2xl lg:text-4xl font-bold lg:tracking-tight text-white">
          Posts
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-lg">
          Explore the latest blog posts and updates from our authors.
        </p>
      </div>

      {users.length && (
        <UserFilter
          users={users}
          selectedUserId={userId}
          totalPosts={totalPosts}
        />
      )}

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 sm:px-0 pt-20">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              {userId ? "No posts found for this user" : "No posts available"}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {userId
                ? "This user hasn't published any posts yet."
                : "There are no posts to display at the moment."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
