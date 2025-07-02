import { prisma } from "@/lib/prisma";
import UserFilter from "../components/userFilter";
import PostCard from "../components/postCard";

export default async function Posts({
  searchParams,
}: {
  searchParams: { userId?: string };
}) {
  // get all users
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      username: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  const userId = searchParams.userId
    ? parseInt(searchParams.userId)
    : undefined;

  const posts = await prisma.post.findMany({
    where: userId ? { userId } : undefined,
    include: {
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      id: "asc",
    },
  });

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

      <UserFilter
        users={users}
        selectedUserId={userId}
        totalPosts={totalPosts}
      />

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 sm:px-0 pt-20">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
