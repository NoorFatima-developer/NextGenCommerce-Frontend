import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen px-6 py-8">
      {/* Breadcrumb navigation */}
      <div className="max-w-[1140px] mx-auto">
        <nav className="flex items-center text-sm text-gray-500 mb-20">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <span className="mx-1">/</span>
          <span className="text-gray-500">404 Error</span>
        </nav>

        {/* Main content - centered */}
        <div className="flex flex-col items-center justify-center text-center mt-16">
          <h1 className="text-[80px] font-bold leading-tight mb-4">404 Not Found</h1>
          <p className="text-base text-gray-600 mb-8">Your visited page not found. You may go home page.</p>
          <Link
            href="/"
            className="bg-[#e74c3c] text-white py-2 px-8 rounded inline-block hover:bg-[#d44233] transition-colors"
          >
            Back to home page
          </Link>
        </div>
      </div>
    </div>
  )
}
