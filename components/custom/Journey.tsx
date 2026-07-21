const STEPS = [
  {
    n: '01',
    title: 'SHARE YOUR VISION',
    copy: 'Every project begins with a conversation. We explore your space, concept, functional needs, and aesthetic direction to understand the atmosphere you want to create.',
  },
  {
    n: '02',
    title: 'DESIGN & MATERIAL EXPLORATION',
    copy: 'Through curated tools — material samples, construction techniques, finishes, and over 1,000 color pomps — we define the rug’s character, scale, texture, and palette together.',
  },
  {
    n: '03',
    title: 'DESIGN DEVELOPMENT',
    copy: 'We translate the concept into a detailed 2D design document outlining dimensions, materials, colors, and technical specifications — ensuring clarity before production.',
  },
  {
    n: '04',
    title: 'REVIEW & APPROVAL',
    copy: 'The design is refined collaboratively until every detail is aligned. Once approved and signed, the project moves into fabrication.',
  },
  {
    n: '05',
    title: 'CRAFT & DELIVERY',
    copy: 'Your rug is handcrafted by expert artisans and delivered within approximately 12–16 weeks, ready to integrate seamlessly into its space.',
  },
];

export default function Journey() {
  return (
    <section className="csjourney">
      <div className="csjourney__head">
        <h2>OUR CUSTOM COLLABORATIVE JOURNEY</h2>
        <p>guided by design expertise, artisanal knowledge, and refined material exploration.</p>
      </div>

      <div className="csjourney__body">
        <ol className="csjourney__steps">
          {STEPS.map((s) => (
            <li key={s.n}>
              <h3>
                {s.n} — {s.title}
              </h3>
              <p>{s.copy}</p>
            </li>
          ))}
        </ol>
        <img className="csjourney__img" src="/images/custom/steps-collage.webp" alt="Design collaboration process" />
      </div>
    </section>
  );
}
