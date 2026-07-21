const POSTS = [
  {
    n: '0002',
    date: 'Tue 3 Jun.',
    kicker: 'CB Hali',
    title: 'Care & Cleaning',
    image: '/images/blog/card-swatches.webp',
  },
  {
    n: '0001',
    date: 'Mon 5 May.',
    kicker: 'Introducing',
    title: 'Manchaha',
    image: '/images/blog/card-pool.webp',
  },
  {
    n: '0004',
    date: 'Tue 9 Dec.',
    kicker: 'CB Hali',
    title: '2025 Recap',
    image: '/images/blog/card-swatches.webp',
  },
  {
    n: '0003',
    date: 'Tue 9 Dec.',
    kicker: 'Introducing',
    title: 'Sizes 4 spaces',
    image: '/images/blog/card-pool.webp',
  },
];

export default function PostsGrid() {
  return (
    <section className="blposts">
      <div className="blposts__head">
        <span className="blposts__label">Latest News</span>
        <h2 className="blposts__title">
          The <img className="blposts__mark" src="/images/icons/blog/icono3.png" alt="CB" /> Atelier
        </h2>
        <span className="blposts__label">Upcoming Events</span>
      </div>

      <div className="blposts__grid">
        {POSTS.map((p) => (
          <article className="blcard" key={p.n}>
            <div className="blcard__media">
              <img src={p.image} alt={p.title} />
              <div className="blcard__caption">
                <span className="blcard__kicker">{p.kicker}</span>
                <h3>{p.title}</h3>
              </div>
            </div>
            <div className="blcard__meta">
              <span>{p.n}</span>
              <strong>{p.date}</strong>
            </div>
          </article>
        ))}
      </div>

      <div className="blposts__foot">
        <img className="blposts__scroll" src="/images/icons/blog/icono4.png" alt="" aria-hidden="true" />
        <a className="blposts__cta" href="/collections">
          <span>Explore Our Catalog</span>
          <svg viewBox="0 0 33 33" fill="none" stroke="#00565e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="16.5" cy="16.5" r="15.5" />
            <polyline points="13.5,9.5 21,16.5 13.5,23.5" />
          </svg>
        </a>
      </div>
    </section>
  );
}
