"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { withPrismaResponse } from "@/lib/prisma-utils";

export async function deletePostAction(id: number) {
  const result = await withPrismaResponse(
    () =>
      prisma.post.delete({
        where: { id },
      }),
    "deleting post",
    "Post deleted successfully"
  );

  if (result.success) {
    revalidatePath("/posts");
  }

  return result;
}
