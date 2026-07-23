const SKETCHES = [
  // tapete redondo con anillos concentricos
  <svg key="round" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
    <path d="M60,10 C88,9 111,32 110,60 C109,89 87,111 59,110 C31,109 10,86 11,59 C12,32 33,11 60,10Z" />
    <circle cx="60" cy="60" r="30" strokeDasharray="4 3" />
    <circle cx="60" cy="60" r="16" />
  </svg>,
  // forma organica libre (kidney)
  <svg key="blob" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
    <path d="M40,14 C62,8 88,18 98,40 C107,60 100,80 84,96 C68,111 44,112 27,99 C11,87 8,64 15,45 C20,31 28,18 40,14Z" />
    <path d="M40,14 C60,20 82,26 95,45 C104,60 96,78 82,93" strokeDasharray="3 4" opacity="0.6" />
  </svg>,
  // rectangular con retícula
  <svg key="grid" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
    <rect x="14" y="24" width="92" height="72" rx="3" />
    <path d="M14,48 H106 M14,72 H106 M46,24 V96 M74,24 V96" opacity="0.6" />
  </svg>,
  // hexagonal
  <svg key="hex" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
    <path d="M60,12 L104,36 V84 L60,108 L16,84 V36 Z" />
    <path d="M60,12 V108 M16,36 L104,84 M104,36 L16,84" opacity="0.5" />
  </svg>,
  // ovalado con borde ondulado
  <svg key="oval" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
    <ellipse cx="60" cy="60" rx="48" ry="32" />
    <path d="M22,60 C34,50 46,68 60,60 C74,52 86,70 98,60" opacity="0.6" />
    <path d="M22,60 C34,70 46,52 60,60 C74,68 86,50 98,60" opacity="0.6" />
  </svg>,
  // forma libre asimetrica
  <svg key="freeform" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
    <path d="M50,10 C72,6 100,16 106,42 C111,62 96,74 90,92 C84,109 60,113 42,104 C24,95 8,80 10,58 C12,38 30,14 50,10Z" />
    <circle cx="58" cy="58" r="4" fill="currentColor" stroke="none" />
  </svg>,
];

export default function SketchBand() {
  return (
    <section className="cssketch">
      <div className="cssketch__grid">
        {SKETCHES.map((svg, i) => (
          <span key={i}>{svg}</span>
        ))}
      </div>
      <p className="cssketch__quote">&ldquo;From sketch to space&rdquo;</p>
    </section>
  );
}
