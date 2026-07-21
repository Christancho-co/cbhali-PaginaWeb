export default function SketchBand() {
  return (
    <section className="cssketch">
      <div className="cssketch__grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>
      <p className="cssketch__quote">&ldquo;From sketch to space&rdquo;</p>
    </section>
  );
}
