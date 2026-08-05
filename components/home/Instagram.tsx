import { getInstagramFeed, getInstagramProfile } from '@/lib/instagram';

export default async function Instagram() {
  const [{ posts, isLive: feedLive }, { profile, isLive: profileLive }] = await Promise.all([
    getInstagramFeed(6),
    getInstagramProfile(),
  ]);
  const isLive = feedLive || profileLive;

  return (
    <>
      <div className="page__bg page__bg--warm" />
      <img className="insta__stairs" src="/images/home/stairs-rug.webp" alt="CB Hali rug on curved stairs" />
      <img className="insta__waves only-d" src="/svg/icon-waves.svg" alt="" />
      <img className="insta__waves insta__waves--m only-m" src="/svg/icon-waves-mobile.svg" alt="" />

      {/* El "telefono" recrea el perfil real (modo oscuro, igual a la
          captura que paso el cliente): foto con anillo, nombre,
          estadisticas, bio, y debajo un grid 3x2 con los ultimos posts
          (via lib/instagram.ts). Misma huella/tamaño que antes; cada
          celda linkea a su post real. */}
      <div className="insta__phone" aria-label={isLive ? `@${profile.username} on Instagram` : 'CB Hali on Instagram'}>
        <div className="insta__phone__screen">
          <div className="insta__phone__header">
            <a
              className="insta__phone__ring"
              href="https://www.instagram.com/cb_hali/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open CB Hali on Instagram"
            >
              {profile.profilePictureUrl ? (
                <img className="insta__phone__avatar" src={profile.profilePictureUrl} alt="" />
              ) : (
                <span className="insta__phone__avatar insta__phone__avatar--fallback">
                  <img src="/svg/logo-mark-black.svg" alt="" />
                </span>
              )}
            </a>

            <div className="insta__phone__info">
              <strong className="insta__phone__name">{profile.name}</strong>
              <div className="insta__phone__stats">
                <span>
                  <strong>{profile.postsCount}</strong>
                  publicaciones
                </span>
                <span>
                  <strong>{profile.followersCount}</strong>
                  seguidores
                </span>
                <span>
                  <strong>{profile.followingCount}</strong>
                  seguidos
                </span>
              </div>
            </div>
          </div>

          <div className="insta__phone__bio">
            {profile.biography.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <div className="insta__phone__grid">
            {posts.slice(0, 6).map((post) => (
              <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer" aria-label="Open Instagram post">
                <img src={post.media_url} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
