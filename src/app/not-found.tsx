export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FBF9F5] text-[#19222E] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md bg-white border border-stone-200/80 rounded-2xl p-8 shadow-sm">
        <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">404 Error</span>
        <h1 className="text-2xl font-bold mt-2 mb-3 text-stone-900">Page Not Found</h1>
        <p className="text-stone-600 text-sm mb-6 leading-relaxed">
          The page you requested could not be found or has moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-5 py-2.5 bg-[#19222E] text-white rounded-xl text-sm font-medium hover:bg-stone-800 transition"
        >
          Back to Homepage
        </a>
      </div>
    </main>
  );
}
