export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="h-6 w-40 animate-pulse rounded-full bg-white/10" />
      <div className="mt-6 h-14 w-full max-w-3xl animate-pulse rounded-3xl bg-white/10" />
      <div className="mt-6 h-6 w-full max-w-2xl animate-pulse rounded-full bg-white/10" />
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <div className="h-40 animate-pulse rounded-3xl bg-white/10" />
        <div className="h-40 animate-pulse rounded-3xl bg-white/10" />
      </div>
    </div>
  );
}
