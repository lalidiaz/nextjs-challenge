export interface UserProps {
  id: number;
  name: string;
}

export interface PostCardProps {
  body: string;
  id: number;
  title: string;
  user: UserProps;
}

export type PageState = "user-not-found" | "no-posts" | "no-filter" | null;
