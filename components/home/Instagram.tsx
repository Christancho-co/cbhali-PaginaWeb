import { getInstagramFeed } from '@/lib/instagram';

export default async function Instagram() {
  const { posts, isLive } = await getInstagramFeed(4);

  return (
    <>
      <div className="page__bg page__bg--warm" />
      <img className="insta__stairs" src="/images/home/stairs-rug.webp" alt="CB Hali rug on curved stairs" />
      <img className="insta__waves only-d" src="/svg/icon-waves.svg" alt="" />
      <img className="insta__waves insta__waves--m only-m" src="/svg/icon-waves-mobile.svg" alt="" />

      {/* El "telefono" ahora muestra un grid 2x2 de los ultimos posts
          reales (via lib/instagram.ts), en vez de una sola foto fija.
          Misma huella/tamaño que antes, cada celda linkea a su post. */}
      <div className="insta__phone" aria-label={isLive ? 'Latest posts from @cb_hali' : 'CB Hali on Instagram'}>
        <div className="insta__phone__screen">
          {posts.slice(0, 4).map((post) => (
            <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer" aria-label="Open Instagram post">
              <img src={post.media_url} alt="" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
