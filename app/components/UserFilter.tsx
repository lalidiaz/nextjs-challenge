"use client";

import { useSearchParams, useRouter } from "next/navigation";
import * as React from "react";
import Button from "./Button";

interface User {
  id: number;
  name: string;
}

interface UserFilterProps {
  users: User[];
  selectedUserId?: string;
}

export default function UserFilter({ users, selectedUserId }: UserFilterProps) {
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
    <div className="w-full max-w-sm mx-auto sm:max-w-md lg:max-w-lg bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 space-y-4 border border-zinc-600">
      <div className="space-y-2">
        <label
          htmlFor="user-filter"
          className="block text-sm font-medium text-white"
        >
          Filter by Author:
        </label>
      </div>

      <div className="space-y-3 sm:space-y-0 sm:flex sm:items-center sm:gap-3">
        <select
          id="user-filter"
          value={selectedUserId?.toString() || ""}
          onChange={(e) => handleUserChange(e.target.value)}
          className="w-full bg-gray-800 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition text-sm"
        >
          <option value="">All Authors</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-right justify-end">
        <Button
          type="button"
          label="Clear"
          onClick={() => handleUserChange("")}
          className="w-full sm:w-auto border border-gray-300   bg-green-700 hover:bg-green-800 text-gray-300 rounded-md"
          ariaLabel="Clear"
        />
      </div>
    </div>
  );
}
