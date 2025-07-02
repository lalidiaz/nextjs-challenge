"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deletePostAction(id: number) {
  try {
    await prisma.post.delete({
      where: {
        id: id,
      },
    });

    revalidatePath("/posts");

    return {
      success: true,
      message: "Post deleted successfully",
    };
  } catch (error) {
    console.error("Error deleting post:", error);

    return {
      success: false,
      message: "Failed to delete post",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
