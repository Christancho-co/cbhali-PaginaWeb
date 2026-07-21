const PHOTOS = [
  { src: '/images/contract/grid-3.webp', alt: 'Hotel Irotama — Santa Marta by interior designer Isabel Parra', caption: 'Hotel Irotama – Santa Marta by interior designer Isabel Parra' },
  { src: '/images/contract/grid-5.webp', alt: 'Hotel bedroom with beige tones' },
  { src: '/images/contract/grid-2.webp', alt: 'Balcony living room with contract rug' },
  { src: '/images/contract/grid-1.webp', alt: 'Bedroom with a red contract rug' },
  { src: '/images/contract/grid-8.webp', alt: 'Detail of a green patterned rug' },
  { src: '/images/contract/grid-4.webp', alt: 'Living room with orange accent wall' },
  { src: '/images/contract/grid-7.webp', alt: 'Living room with a light rug' },
  { src: '/images/contract/grid-6.webp', alt: 'Corridor with blue accent lighting' },
];

export default function Gallery() {
  return (
    <section className="ctgallery">
      {PHOTOS.map((p, i) => (
        <figure key={i} className="ctgallery__item">
          <img src={p.src} alt={p.alt} />
          {p.caption && <figcaption>{p.caption}</figcaption>}
        </figure>
      ))}
    </section>
  );
}
