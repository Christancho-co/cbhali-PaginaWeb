const VERTICAL = [
  { ch: 'C', y: 0 },
  { ch: 'B', y: 131.28 },
  { ch: '|', y: 393.83 },
  { ch: 'H', y: 656.38 },
  { ch: 'ª', y: 787.65 },
  { ch: 'L', y: 918.93 },
  { ch: 'i', y: 1050.2 },
];

export default function Statement() {
  return (
    <>
      <div className="page__bg page__bg--gray" />

      <div className="stmt__vertical" aria-hidden="true">
        {VERTICAL.map((l) => (
          <span key={l.ch} style={{ top: `calc(var(--u) * ${l.y})` }}>
            {l.ch}
          </span>
        ))}
      </div>

      <h2 className="stmt__title">
        WE DON’T CREATE OBJECTS.
        <br />
        WE CREATE PRESENCE.
      </h2>

      <p className="stmt__copy">
        WE ARE COMMITTED TO CREATING PRODUCTS THAT NOT ONLY BEAUTIFY SPACES BUT ALSO TELL STORIES
        AND CONNECT EMOTIONALLY WITH THOSE WHO CHOOSE THEM. BY MERGING THE CONTEMPORARY WITH THE
        ARTISANAL IN EVERY DETAIL, WE HAVE FOUND A BALANCE BETWEEN INNOVATION AND TRADITION THAT
        DEFINES OUR WORK AND CONTINUES TO GUIDE OUR VISION FOR THE FUTURE.
      </p>

      <div className="stmt__rule" aria-hidden="true" />
    </>
  );
}
