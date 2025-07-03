import { Post, User } from "@prisma/client";
import { PageState } from "./types";

export function determinePageState(
  userId?: string,
  userById?: User | null,
  posts?: Post[] | null
): PageState {
  if (!posts || posts.length === 0) return "no-posts";
  if (!userId) return "no-filter";
  if (!userById) return "user-not-found";

  return null;
}
