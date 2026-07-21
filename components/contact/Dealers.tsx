const CITIES = [
  {
    name: 'Medellín',
    stores: [
      { store: 'MM INTERIOR', addr: 'Cra 25a # 1 – 31' },
      { store: 'GALERÍA MATIZ', addr: 'Av. Nutibarra # 71 – 69. Laureles Estadio' },
      { store: 'COSSE', addr: 'Cra 43a Cl La sur # 175 Local 120' },
      { store: 'ZIENTTE', addr: 'Cra 43a # 1 – 164 Local 164 San Fernando Plaza' },
      { store: 'FORJA', addr: 'Cra 32 # 2 Sur – 85 Mixy Mall La Inferior' },
      { store: 'LA HABITACIÓN', addr: 'Cra 32 # 1 – 52 Oficina 524' },
    ],
  },
  {
    name: 'Bogotá',
    stores: [
      { store: 'ZIENTTE', addr: 'Cl 81 #9 – 09 / Cra 17 # 108 – 52' },
      { store: 'CASA SOLERO', addr: 'Cl 79a #8 - 55' },
      { store: 'SUPLEXHOME', addr: 'Cl 81 #8 – 29' },
    ],
    extra: { name: 'Cali', store: 'ZIENTTE', addr: 'Av. 6a Nte. #28 – 59' },
  },
  {
    name: 'Barranquilla',
    stores: [
      { store: 'SUPELLEX HOME', addr: 'Cl 76 # 74 - 34' },
      { store: 'ZIENTTE', addr: 'Cra 52 # 79 – 92' },
      { store: 'STUARIO DESIGN LAB', addr: 'Cl 77 # 62 – 05' },
      { store: 'ANA MARIA ROIG – VIURE', addr: 'Cra 51 # 76 – 168' },
    ],
  },
  {
    name: 'Bucaramanga',
    stores: [
      { store: 'B HOUSE S.A.S', addr: 'Cra 36 # 35 – 25' },
      { store: 'AMBIENTA STUDIO', addr: 'Cra 36 # 35 – 25' },
      { store: 'B HOUSE S.A.S', addr: 'Cra 36 # 35 25' },
      { store: 'AMBIENTA STUDIO', addr: 'Cl 42 # 33 – 31' },
    ],
  },
];

const DEVELOPERS = [
  { name: 'Ana Maria Zulluaga', city: 'Bogotá- Medellín- Cali', phone: '+57 310 237 3864', photo: '/images/contact/ana.webp' },
  { name: 'Juan Pablo Romero', city: 'Miami, Fl', phone: '+1 305 907 4600', photo: '/images/contact/juan.webp' },
  { name: 'Francella Caballero Rojas', city: 'Costa Rica', phone: '+50 683 362 084', photo: '/images/contact/francella.webp' },
  { name: 'Andres Felipe & Jorge Bateman', city: 'Orlando, Fl', phone: '+1 786 978 1295', photo: '/images/contact/andresyjorge.webp' },
];

export default function Dealers() {
  return (
    <section className="cndealers">
      <img className="cndealers__bg" src="/images/contact/dealers-bg.webp" alt="" />
      <img className="cndealers__ornament" src="/images/icons/contact/icono2.png" alt="" aria-hidden="true" />

      <div className="cndealers__intro">
        <p>info@cbhali.com</p>
        <p>Carrera 49c #79-184</p>
        <p>BARRANQUILLA</p>
        <hr />
        <p className="cndealers__visits">Visitas con cita previa.</p>
        <hr />
      </div>

      <h2 className="cndealers__title">Dealers.</h2>

      <div className="cndealers__grid">
        {CITIES.map((c) => (
          <div className="cndealers__city" key={c.name}>
            <h3>{c.name}</h3>
            {c.stores.map((s, i) => (
              <p key={i}>
                <strong>{s.store}</strong>
                <br />
                {s.addr}
              </p>
            ))}
            {c.extra && (
              <>
                <h3>{c.extra.name}</h3>
                <p>
                  <strong>{c.extra.store}</strong>
                  <br />
                  {c.extra.addr}
                </p>
              </>
            )}
          </div>
        ))}
        <img className="cndealers__map" src="/images/icons/contact/icono3.png" alt="" aria-hidden="true" />
      </div>

      <h2 className="cndealers__title cndealers__title--dev">Brand developers.</h2>

      <div className="cndealers__devs">
        {DEVELOPERS.map((d) => (
          <div className="cndealers__dev" key={d.name}>
            <div>
              <h4>{d.name}</h4>
              <p>{d.city}</p>
              <p>{d.phone}</p>
            </div>
            <img src={d.photo} alt={d.name} />
          </div>
        ))}
      </div>
    </section>
  );
}
