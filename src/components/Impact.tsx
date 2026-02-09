const Impact = () => {
  return (
    <section className="py-10 px-6 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#192841" }}
          >
            The New Efficiency Frontier
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            In the current economy, growth at all costs is over. Growth through efficiency is the new standard.
          </p>
          <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              Generative AI is the leverage point between "hiring more people" and "scaling operations."
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Slash Support Costs: Deflect up to 70% of routine inquiries automatically.</li>
              <li>Instant Onboarding: New hires get answers from your AI knowledge base, not your senior engineers.</li>
              <li>Zero Hallucinations: We implement strict guardrails so your AI never invents facts.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
