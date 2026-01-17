export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>

      <p className="mt-8 leading-7 opacity-90">
        I work at the intersection of distributed systems and AI system architecture, with a focus on
        deterministic control planes, observability, and longitudinal memory infrastructure.
      </p>

      <p className="mt-4 leading-7 opacity-90">
        I publish research and writing through <a className="underline underline-offset-4" href="https://www.teknamin.com">Teknamin Labs</a>.
      </p>
    </main>
  );
}