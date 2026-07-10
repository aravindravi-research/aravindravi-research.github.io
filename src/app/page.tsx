export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Aravind Ravi</h1>
      <p className="mt-3 text-lg opacity-80">
        Staff Software Engineer · Independent AI Systems Researcher
      </p>

      <p className="mt-8 leading-7 opacity-90">
        I build and evaluate control-plane architectures for long-running AI applications, with an emphasis on deterministic routing, durable context, observability, and operator control.
      </p>

      <div className="mt-10 space-y-2">
        <a className="underline underline-offset-4" href="/publications/">Publications</a><br />
        <a className="underline underline-offset-4" href="/about/">About</a><br />
        <a className="underline underline-offset-4" href="/contact/">Contact</a>
      </div>

      <hr className="my-12 opacity-30" />

      <h2 className="text-xl font-semibold">Research context</h2>
      <p className="mt-3 leading-7 opacity-90">
        This work is developed within the context of <a className="underline underline-offset-4" href="https://www.teknamin.com">Teknamin Labs</a>,
        an independent research practice founded in 2015.
      </p>

      <p className="mt-3 leading-7 opacity-90">
        My current publication work includes HNIR, a DOI-registered preprint on deterministic intent routing for distributed conversational systems.
      </p>
    </main>
  );
}
