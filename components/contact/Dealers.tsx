const CITIES = [
  {
    name: 'Bogotá',
    stores: [
      { store: 'ZIENTTE', addr: 'Calle 81 #9-09 / Cra. 17 #108-52' },
      { store: 'CASA SOLERO', addr: 'Calle 79a #8-55' },
      { store: 'COSSE', addr: 'Cl. 109 #15-88' },
      { store: 'SUPELLEX HOME', addr: 'Cl. 81 #8-29' },
      { store: 'ALELI HOME DECOR', addr: 'Cl. 70a No. 5-67' },
      { store: 'DIAMANTINA Y LA PERLA', addr: 'Cl. 70a #5-85' },
    ],
  },
  {
    name: 'Medellín',
    stores: [
      { store: 'MM INTERIOR - MÓNICA ECHEVERRI', addr: 'Cra. 25a #1-31, Parque Empresarial El Tesoro' },
      { store: 'GALERÍA MATIZ', addr: 'Av. Nutibara #71-69, Laureles - Estadio' },
      { store: 'COSSE', addr: 'Cra. 43A, Cl. 1a Sur #175 Local 120' },
      { store: 'ZIENTTE', addr: 'Cra. 43a No. 1-164, Local 1-164 San Fernando Plaza' },
      { store: 'FORJA', addr: 'Cra. 32 #2 Sur - 85, Mixy Mall La Inferior' },
    ],
  },
  {
    name: 'Barranquilla',
    stores: [
      { store: 'SUPELLEX HOME', addr: 'Cl. 76 #74-34' },
      { store: 'ZIENTTE', addr: 'Cra. 52 #79-92' },
      { store: 'STUARIO DESIGN LAB', addr: 'Cl. 77 No. 62-05' },
      { store: 'CASA SCHLEGEL DONADO', addr: 'Cra. 53 #79-127' },
      { store: 'ANA MARIA ROIG - VIURE', addr: 'Cra. 51 No. 76-168' },
      { store: 'SCALATTO STUDIO', addr: 'Cra. 52 #79-131' },
    ],
  },
  {
    name: 'Bucaramanga',
    stores: [
      { store: 'REVERZO', addr: 'Cl. 48 #27-77' },
      { store: 'ED ESPACIO & DISEÑO S.A.S', addr: 'Centro Comercial Cabecera, cuarta etapa, local 418' },
      { store: 'B HOUSE S.A.S', addr: 'Cra. 36 #35-25' },
      { store: 'AMBIENTA STUDIO', addr: 'Cl. 42 #33-31' },
    ],
  },
  {
    name: 'Cali',
    stores: [
      { store: 'KASANOVA', addr: 'Av. 6A Norte #27N-48 Piso 2' },
      { store: 'DIANA BECERRA', addr: 'Av. 10N #10-70 Juanambú, Santiago de Cali' },
      { store: '57 DC MOBILIARIO', addr: 'Av. 6 Norte #29AN-60' },
      { store: 'ZIENTTE', addr: 'Av. 6a Nte. #28-59' },
      { store: 'TIENDA DE INTERIORISMO', addr: 'Cl. 3 #10-27' },
    ],
  },
  {
    name: 'Pereira',
    stores: [
      { store: 'KL MOBILIARIO', addr: 'Cra. 9 #8a-58 Bodega 3, Obelisco Plaza La Badea' },
      { store: 'ANTÁRTICA', addr: 'Cra. 15 Bis #13-07' },
      { store: 'ENTORNO DECORACIONES', addr: 'Cra. 14 #12-69' },
    ],
  },
  {
    name: 'Cartagena',
    stores: [
      { store: 'DABAR HOME', addr: 'Centro Comercial Bocagrande, Local 1-16' },
      { store: 'INTERIOR NATURAL LIVING', addr: 'Cra. 4 No. 5a-47' },
      { store: 'LIA OSORIO DESIGN', addr: 'Bocagrande, Cra. 3 No. 6-120, Centro de Negocios Vélez, oficina 302' },
    ],
  },
  {
    name: 'Santa Marta',
    stores: [
      { store: 'MÓNICA SARAVIA', addr: 'Cra. 4 #26-40 Local Terrace, Comuna 2' },
      { store: 'INTERIOR NATURAL LIVING', addr: 'Cra. 4 #23-49, Comuna 2, Santa Marta' },
    ],
  },
  {
    name: 'Montería',
    stores: [
      { store: 'CASA TUTO', addr: 'Cra. 3 #66-68' },
      { store: 'EL TALLER DE LILY', addr: 'Cra. 18 #42-34' },
      { store: 'KAHOBA ESPACIO INTERIOR', addr: 'Cl. 64a #5-54' },
    ],
  },
];

const OTHER_CITIES = [
  { name: 'Valledupar', store: 'INNOVA BY PATRICIA TORRES', addr: 'Cra. 9 #7A-28' },
  { name: 'Manizales', store: 'ELEIA INTERIORES', addr: 'Cra. 25 #65-140 Local #23B-40' },
  { name: 'Sincelejo', store: 'MUEBLES PEREIRA', addr: 'Cra. 29 #23B-40' },
  { name: 'Cúcuta', store: 'DEL CORTE ANGARITA', addr: 'Av. 2 Este #13A-51, Los Caobos' },
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
        <p className="cndealers__eyebrow">Authorized preferred partners</p>
        <p>CB Hali</p>
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
          </div>
        ))}
        <div className="cndealers__city">
          <h3>Otras Ciudades</h3>
          {OTHER_CITIES.map((o) => (
            <p key={o.name}>
              <strong>{o.name}</strong>
              <br />
              {o.store} - {o.addr}
            </p>
          ))}
        </div>
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
