export default function Intro() {
  return (
    <section className="csintro">
      <div className="csintro__head">
        <h2 className="csintro__title">
          DESIGNED
          <br />
          FOR SPACES
          <br />
          WITH <strong>INTENTION.</strong>
        </h2>
        <span className="csintro__icon" aria-hidden="true">
          <svg viewBox="0 0 40 52" fill="none" stroke="#8c9789" strokeWidth="1.5">
            <rect x="1" y="1" width="38" height="50" rx="8" />
            <circle cx="20" cy="20" r="9" fill="#8c9789" stroke="none" />
            <path d="M14 33h12M16 38h8M17.5 42h5" />
          </svg>
        </span>
      </div>

      <p className="csintro__copy">
        At CB Hali, custom rugs are conceived as integral elements of space — quiet presences that
        shape atmosphere, movement, and experience. Each creation begins with a conversation,
        translating spatial vision into materiality, proportion, texture, and emotion. Designed in
        close collaboration with architects, designers, and clients, every piece is a response to
        its environment — never an addition, always a foundation. From tailored dimensions to
        nuanced color stories and refined finishes, every decision is deliberate and deeply
        considered. Craftsmanship becomes language, and design becomes presence. Custom is our
        purest expression — where creativity, precision, and artisanal mastery converge to create
        pieces that belong entirely to the spaces they inhabit, and nowhere else.
      </p>

      <div className="csintro__chevrons" aria-hidden="true">
        <svg viewBox="0 0 60 32"><polyline points="4,4 30,26 56,4" /></svg>
      </div>
    </section>
  );
}
