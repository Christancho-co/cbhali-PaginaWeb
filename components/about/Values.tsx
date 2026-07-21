const VALUES = [
  {
    n: '1',
    title: 'Craftsmanship & Heritage:',
    copy: 'We honor time-tested artisanal traditions—hand-knotting, weaving, and tufting—while reimagining them for today. Every piece carries the soul of the maker and the wisdom of generations.',
  },
  {
    n: '2',
    title: 'Innovation & Personalization:',
    copy: 'We believe design should evolve. Our work is driven by curiosity, creativity, and the freedom to co-create. Each project is a tailored experience—because no two stories are alike.',
  },
  {
    n: '3',
    title: 'Sustainability with Purpose:',
    copy: 'We are committed to using sustainable and recycled materials, minimizing environmental impact, and supporting responsible, ethical production across our supply chain.',
  },
];

export default function Values() {
  return (
    <section className="abvalues">
      <h2 className="abvalues__title">
        <span className="abvalues__mark">CB</span>
        <span>
          Our
          <br />
          Values
        </span>
      </h2>

      <ol className="abvalues__list">
        {VALUES.map((v) => (
          <li key={v.n}>
            <p>
              <strong>
                {v.n}. {v.title}
              </strong>{' '}
              {v.copy}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
