export default function Author() {
  return (
    <section className="csauthor">
      <div className="csauthor__photo">
        <img src="/images/custom/author-stairs.webp" alt="Custom rug swatches on a staircase" />
        <p className="csauthor__copy">
          Author is our platform for creative collaboration. A space where we co-create with
          architects, interior designers, artists, and visionaries to develop pieces that are deeply
          personal, innovative, and rooted in storytelling.
          <br />
          <br />
          You bring your concept. We bring the materials, techniques, and expert guidance to make it
          real — whether that means a custom rug, a textile experiment, or a unique object for a
          one-of-a-kind project. Each collaboration under Author is credited and celebrated. It&rsquo;s a
          shared process of design, dialogue, and authorship — where the final piece carries your
          signature as much as ours. We don&rsquo;t just create for you.
          <br />
          <br />
          We create with you.
        </p>
        <a className="csauthor__cta" href="/collections">
          <span>Explore Our Custom Catalog</span>
          <svg viewBox="0 0 33 33" fill="none" stroke="#00565e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="16.5" cy="16.5" r="15.5" />
            <polyline points="13.5,9.5 21,16.5 13.5,23.5" />
          </svg>
        </a>
        <p className="csauthor__tag">CUSTOM &rarr; BESPOKE, EXPRESSIVE, ONE-OF-A-KIND, DESIGN-LED</p>
      </div>
    </section>
  );
}
