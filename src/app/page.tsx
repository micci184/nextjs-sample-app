export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-fuchsia-300">
            Helath Check
          </h1>
          <p className="mt-2 text-sm text-slate-200/85">
            Welcome back. Sign in to continue.
          </p>
        </div>

        <form className="space-y-4">
          <label className="block">
            <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-200/80">
              Username
            </span>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-fuchsia-300"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-200/80">
              Password
            </span>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-fuchsia-300"
            />
          </label>

          <button
            type="button"
            className="mt-2 w-full rounded-xl bg-fuchsia-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-500 active:scale-[0.99]"
          >
            Log in
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-slate-200/80">
          <a href="/health" className="underline decoration-dotted underline-offset-4">
            Go to health screen
          </a>
        </div>
      </div>
    </main>
  );
}
