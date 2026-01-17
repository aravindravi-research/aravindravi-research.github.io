

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Aravind Ravi</h1>
      <p className="mt-3 text-lg opacity-80">
        Staff Software Engineer · Independent Researcher
      </p>

      <p className="mt-8 leading-7 opacity-90">
        I design and study foundational system architectures for long-running AI applications:
        systems where correctness, continuity, and control matter more than raw model capability.
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
        I am the author of HNIR: <em>A Deterministic Intent Routing Control Plane for Distributed Conversational Systems</em>.
      </p>
    </main>
  );
}
