export default function HealthPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <section className="w-full max-w-xl rounded-3xl border border-emerald-800 bg-emerald-950 p-10 text-center shadow-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
          Service Status
        </p>
        <h1 className="text-6xl font-black tracking-tight text-emerald-400">Health</h1>
        <p className="mt-4 text-sm text-emerald-100">
          API and web app are running normally.
        </p>
      </section>
    </main>
  );
}
