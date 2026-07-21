const STEPS = [
  {
    n: '01',
    title: 'Strategic Consultation',
    copy: 'Every project begins with alignment. We review the spatial concept, performance requirements and aesthetic direction to establish a clear framework.',
  },
  {
    n: '02',
    title: 'Concept Development',
    copy: 'Scale, pattern, color and material are refined to respond to the identity of the project. Designs may evolve from our existing collections or be developed entirely from scratch.',
  },
  {
    n: '03',
    title: 'Technical Definition & Sampling',
    copy: 'We provide a comprehensive proposal including visual documentation, material specification and custom hand samples for evaluation. Sampling typically requires 3–4 weeks.',
  },
  {
    n: '04',
    title: 'Approval & Production',
    copy: 'Following approval, each piece is handcrafted with technical precision. Production timelines range between 21–26 weeks depending on complexity and volume.',
  },
  {
    n: '05',
    title: 'Logistics & Delivery',
    copy: 'We coordinate international shipping and customs management to ensure seamless global delivery.',
  },
];

export default function Process() {
  return (
    <section className="ctprocess">
      <img className="ctprocess__vertical" src="/images/icons/contract/icono3.png" alt="" aria-hidden="true" />

      <div className="ctprocess__head">
        <h2>
          The <span className="ctprocess__mark">CB</span> Creative Process
        </h2>
      </div>

      <div className="ctprocess__body">
        <h3 className="ctprocess__rhr">
          Residential,
          <br />
          Hospitality,
          <br />
          Retail
          <br />
          and Beyond
        </h3>
        <img className="ctprocess__cube" src="/images/icons/contract/icono8.png" alt="" aria-hidden="true" />

        <ol className="ctprocess__steps">
          {STEPS.map((s) => (
            <li key={s.n}>
              <h4>
                {s.n} &mdash; {s.title}
              </h4>
              <p>{s.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
