import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-12 md:py-20 px-6 min-h-screen bg-slate-900 flex items-center justify-center flex-col">
      <h1 className="text-2xl lg:text-4xl font-bold lg:tracking-tight text-white">
        Not Found
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300 text-lg">
        Could not find requested resource
      </p>
      <Link href="/" className="text-pink-500">
        Return Home
      </Link>
    </div>
  );
}
