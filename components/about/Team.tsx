const TEAM = [
  { src: '/images/about/team-1.webp', alt: 'Isabella Felfle, Sales & Marketing Director' },
  { src: '/images/about/team-2.webp', alt: 'Team member, Product Designer' },
  { src: '/images/about/team-3.webp', alt: 'Karoline Perez, Professionals Coordinator' },
  { src: '/images/about/team-4.webp', alt: 'Vanessa Borelly, Brand Developer Cali' },
  { src: '/images/about/team-5.webp', alt: 'Ronald, Product Designer' },
  { src: '/images/about/team-6.webp', alt: 'Andres Yanett & Jorge Bateman, Brand Developers Miami' },
];

export default function Team() {
  return (
    <section className="abteam">
      <p className="abteam__credits">
        Cristina Borelly - CEO &amp; Founder / Ray Herrera - International Operations Manager &amp;
        Contract Projects / Isabella Felfle - Sales &amp; Marketing Director / Karoline Perez -
        Professionals Coordinator / Margarita Nuñez - Retail Coordinator / Ronald - Product
        Designer / Misael Nuñez - Designer / Daniel Padilla - Supply Chain / Angelica - Accounting
        Assistant / Yeison Cassares: Head of Logistics / Luis Miguel - Logistics Ana Maria Zuluaga
        - Brand Developer Bogotá / Juan David Gomez - Brand Developer Medellín / Vanessa Borelly -
        Brand Developer Cali / Andres Yanett &amp; Jorge Bateman - Brand Developer Miami
      </p>

      <div className="abteam__grid">
        {TEAM.map((t, i) => (
          <img key={i} src={t.src} alt={t.alt} />
        ))}
      </div>

      <p className="abteam__signature">Crafted For Visionaries!</p>
      <hr />
    </section>
  );
}
