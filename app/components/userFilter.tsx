"use client";

import { useSearchParams, useRouter } from "next/navigation";
import * as React from "react";

interface User {
  id: number;
  name: string;
}

interface UserFilterProps {
  users: User[];
  selectedUserId?: number;
  totalPosts?: number;
}

export default function UserFilter({
  users,
  selectedUserId,
  totalPosts,
}: UserFilterProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleUserChange = (userId: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (userId) {
      params.set("userId", userId);
    } else {
      params.delete("userId");
    }
    router.push(`/posts?${params}`);
  };

  return (
    <div className="w-full max-w-sm mx-auto sm:max-w-md lg:max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 space-y-4 border border-zinc-600">
      <div className="space-y-2">
        <label
          htmlFor="user-filter"
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          Filter by Author:
        </label>
      </div>

      <div className="space-y-3 sm:space-y-0 sm:flex sm:items-center sm:gap-3">
        <select
          id="user-filter"
          value={selectedUserId?.toString() || ""}
          onChange={(e) => handleUserChange(e.target.value)}
          className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition text-sm"
        >
          <option value="">All Authors</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        <button
          onClick={() => handleUserChange("")}
          className="w-full sm:w-auto px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md transition-colors duration-200 font-medium text-sm"
        >
          Clear
        </button>
      </div>
      <div>
        <p className="text-xs text-right text-white">
          {totalPosts} Total posts
        </p>
      </div>
    </div>
  );
}
