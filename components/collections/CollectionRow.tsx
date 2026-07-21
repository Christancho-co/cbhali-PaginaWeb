import Link from 'next/link';

export default function CollectionRow({
  name,
  image,
  alt,
  side,
  href,
  children,
}: {
  name: string;
  image: string;
  alt: string;
  side: 'left' | 'right';
  href?: string;
  children: React.ReactNode;
}) {
  const media = (
    <div className="crow__media">
      <img src={image} alt={alt} />
      <span className="crow__name crow__name--top">{name}</span>
      <span className="crow__name crow__name--bottom">{name}</span>
    </div>
  );

  return (
    <div className={`crow crow--${side}`}>
      {href ? <Link href={href} className="crow__link">{media}</Link> : media}
      <p className="crow__copy">{children}</p>
    </div>
  );
}
