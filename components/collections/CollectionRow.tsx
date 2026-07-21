export default function CollectionRow({
  name,
  image,
  alt,
  side,
  children,
}: {
  name: string;
  image: string;
  alt: string;
  side: 'left' | 'right';
  children: React.ReactNode;
}) {
  return (
    <div className={`crow crow--${side}`}>
      <div className="crow__media">
        <img src={image} alt={alt} />
        <span className="crow__name crow__name--top">{name}</span>
        <span className="crow__name crow__name--bottom">{name}</span>
      </div>
      <p className="crow__copy">{children}</p>
    </div>
  );
}
