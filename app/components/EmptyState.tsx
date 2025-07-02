export default function EmptyState({
  type,
}: {
  type: "user-not-found" | "no-posts";
  userId?: number;
}) {
  const messages = {
    "user-not-found": {
      title: "User not found",
      description: "User not found in our database",
    },
    "no-posts": {
      title: "No posts found for this user",
      description: "This user hasn't published any posts yet.",
    },
  };
  return (
    <div className="text-center py-20">
      <div className="max-w-md mx-auto">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
          {messages[type].title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          {messages[type].description}
        </p>
      </div>
    </div>
  );
}
