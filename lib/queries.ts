import { unstable_cache } from "next/cache";
import { prisma } from "./prisma";

export const getCachedUsers = unstable_cache(
  async () =>
    await prisma.user.findMany({
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        name: "asc",
      },
    }),
  ["users"],
  { revalidate: 60 }
);

export const getCachedUserById = unstable_cache(
  async (userId) =>
    await prisma.user.findUnique({
      where: { id: parseInt(userId) },
    }),
  ["user"],
  { revalidate: 60 }
);

export const getCachedPosts = unstable_cache(
  async (userId: string | undefined = undefined) =>
    await prisma.post.findMany({
      where: userId ? { userId: parseInt(userId) } : undefined,
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
    }),
  ["posts"],
  { revalidate: 60 }
);
