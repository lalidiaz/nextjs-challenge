"use client";
import { useState, useTransition } from "react";
import { deletePostAction } from "@/actions/post-actions";
import Modal from "./modal";
import { toast } from "react-toastify";

interface UserProps {
  id: number;
  name: string;
}
interface PostCardProps {
  body: string;
  id: number;
  title: string;
  user: UserProps;
}

export default function PostCard({ post }: { post: PostCardProps }) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleDelete = async () => {
    startTransition(async () => {
      const result = await deletePostAction(post.id);

      if (result.success) {
        toast.success(result.message);
        setOpen(false);
      } else {
        toast.error(result.message);
        setOpen(false);
      }
    });
  };

  return (
    <>
      {open && (
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          confirmDelete={handleDelete}
          title="Delete Post"
          message={`Are you sure you want to delete "${post.title}"? This action cannot be undone.`}
        />
      )}
      <div className="max-w-sm md:max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6 flex flex-col justify-between min-h-72 border border-zinc-600">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 dark:text-gray-100 min-h-[3rem]">
          {post.title}
        </h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 flex-grow overflow-hidden text-ellipsis overflow-y-auto py-4 md:py-6">
          {post.body}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 min-h-[1.5rem]">
            By {post.user.name}
          </span>

          <button
            onClick={() => setOpen(true)}
            type="button"
            className="bg-red-700 text-white text-sm font-semibold px-3 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            aria-label="Delete"
          >
            {isPending ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </>
  );
}
