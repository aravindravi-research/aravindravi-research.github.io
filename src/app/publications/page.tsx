export default function PublicationsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Publications</h1>

      <div className="mt-10 space-y-6">
        <div>
          <h2 className="text-lg font-semibold">
            HNIR: A Deterministic Intent Routing Control Plane for Distributed Conversational Systems
          </h2>
          <p className="mt-2 opacity-90">
            HNIR is a deterministic intent-routing control plane designed for distributed conversational systems. It routes user intents to the appropriate backend service by matching them against a set of registered handlers, with fallback and error handling built in. The system is designed to be extensible, allowing new services and handlers to be added without modifying existing code.
          </p>
          <p className="mt-2 opacity-90">Preprint · DOI-registered</p>
          <p className="mt-2">
            DOI: <a className="underline underline-offset-4" href="https://doi.org/10.5281/zenodo.18110920">10.5281/zenodo.18110920</a>
          </p>
        </div>
      </div>
    </main>
  );
}
