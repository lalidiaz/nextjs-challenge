import Link from "next/link";

export default function Home() {
  return (
    <div className="py-12 md:py-20 px-6 min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-4">
            <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-white">
              NextJS Blog Post Challenge ✨
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto">
              Explore the latest blog posts and updates from our authors.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/posts"
              className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-900 text-white font-medium px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-md transition-all duration-200 hover:scale-105"
            >
              View All Posts
            </Link>
          </div>

          <div className="pt-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 cursor-default">
                  <p>💬</p>
                </div>
                <h2 className="text-white font-medium mb-2">Quality Content</h2>
                <p className="text-slate-400 text-sm">
                  Discover posts from authors
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 cursor-default">
                  <p>🔍</p>
                </div>
                <h3 className="text-white font-medium mb-2">Easy Filtering</h3>
                <p className="text-slate-400 text-sm">Filter posts by author</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 cursor-default">
                  <p>🚀</p>
                </div>
                <h3 className="text-white font-medium mb-2">Modern Design</h3>
                <p className="text-slate-400 text-sm">
                  Clean, responsive interface
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800">
            <p className="text-white text-sm">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
