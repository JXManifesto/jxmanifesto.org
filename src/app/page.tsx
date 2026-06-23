import Link from "next/link";
export default function RootPage() {
  return (
    <main className="min-h-screen grid place-items-center p-6">
      <section className="max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-accent">
          JX Manifesto
        </p>
        <h1 className="mt-5 text-5xl font-semibold">Choose a language</h1>
        <p className="mt-4 text-lg text-muted">
          Read the first public version of the Journalist Experience manifesto.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            className="rounded-full bg-ink px-6 py-3 text-paper"
            href="/en/"
          >
            English
          </Link>
          <Link
            className="rounded-full border border-ink px-6 py-3"
            href="/fa/"
          >
            فارسی
          </Link>
        </div>
      </section>
    </main>
  );
}
