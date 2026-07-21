export default function Intro() {
  return (
    <section className="cintro">
      <h2 className="cintro__title">Curated pieces Available for Immediate Delivery.</h2>
      <h3 className="cintro__sub">Collections</h3>
      <p className="cintro__copy">
        Our rugs are not designed as isolated pieces, but as curated families that express the
        essence of our brand — balance, craftsmanship, and quiet sophistication. Every collection
        explores a distinct idea, mood, or material language, while remaining connected by a
        shared philosophy of timeless design and intentional living. From subtle textures to
        expressive weaves, each collection reflects a way of inhabiting space: calm, honest, and
        enduring. Together, they form a cohesive universe where form, function, and emotion meet.
        Discover the collection that resonates with your space — and with you.
      </p>

      <div className="cintro__truck" aria-hidden="true">
        <svg viewBox="0 0 96 96" fill="none">
          <rect x="4" y="4" width="52" height="60" rx="4" stroke="#c0833e" strokeWidth="4" />
          <circle cx="30" cy="28" r="9" fill="#c0833e" />
          <path d="M14 56c2-10 10-16 16-16s14 6 16 16" fill="#c0833e" />
          <path d="M56 34h20l14 14v14a4 4 0 0 1-4 4H56z" fill="#87402b" />
          <rect x="60" y="38" width="14" height="10" fill="#fff" />
          <circle cx="66" cy="70" r="7" fill="#231f20" />
          <circle cx="86" cy="70" r="7" fill="#231f20" />
        </svg>
      </div>

      <div className="cintro__chevrons" aria-hidden="true">
        <svg viewBox="0 0 60 32"><polyline points="4,4 30,26 56,4" /></svg>
      </div>
    </section>
  );
}
