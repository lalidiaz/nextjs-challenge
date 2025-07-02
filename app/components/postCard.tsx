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
  console.log("post", post);
  return (
    <>
      <div className="max-w-sm md:max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6 flex flex-col justify-between min-h-72">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 dark:text-gray-100 min-h-[3rem]">
          {post.title}
        </h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 flex-grow overflow-hidden text-ellipsis overflow-y-scroll py-4 md:py-6">
          {post.body}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 min-h-[1.5rem]">
            By: {post.user.name}
          </span>

          <button
            type="button"
            className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            aria-label="Delete"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
