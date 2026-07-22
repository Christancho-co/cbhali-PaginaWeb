/**
 * getInstagramFeed — helper para traer los últimos posts de Instagram
 * desde la Instagram Graph API (usando INSTAGRAM_ACCESS_TOKEN e
 * INSTAGRAM_USER_ID como variables de entorno). Si esas variables no están
 * configuradas, o si la API falla, devuelve fallbackPosts (imágenes fijas
 * del sitio) con `isLive: false` para que quien lo use pueda distinguir
 * datos reales de datos de respaldo.
 *
 * ⚠️ NO se usa actualmente en ninguna página ni componente — el mockup de
 * Instagram que sí se ve en la home (HomeCollage.tsx) es una imagen
 * estática (/images/ig-preview.png), no datos reales de la API. Este
 * archivo quedó listo para conectar el feed real más adelante.
 */
export type InstagramMediaItem = {
  id: string
  caption?: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url?: string
  permalink: string
  thumbnail_url?: string
}

const fallbackPosts: InstagramMediaItem[] = [
  {
    id: 'fallback-1',
    media_type: 'IMAGE',
    media_url: '/images/bg-Explore-catalogo.webp',
    permalink: 'https://www.instagram.com/cbhali/',
    caption: 'CB HaLi official Instagram',
  },
  {
    id: 'fallback-2',
    media_type: 'IMAGE',
    media_url: '/images/tapete.webp',
    permalink: 'https://www.instagram.com/cbhali/',
    caption: 'CB HaLi official Instagram',
  },
  {
    id: 'fallback-3',
    media_type: 'IMAGE',
    media_url: '/images/hero-home.webp',
    permalink: 'https://www.instagram.com/cbhali/',
    caption: 'CB HaLi official Instagram',
  },
  {
    id: 'fallback-4',
    media_type: 'IMAGE',
    media_url: '/images/Asset 10-102.webp',
    permalink: 'https://www.instagram.com/cbhali/',
    caption: 'CB HaLi official Instagram',
  },
  {
    id: 'fallback-5',
    media_type: 'IMAGE',
    media_url: '/images/Asset 10-101.webp',
    permalink: 'https://www.instagram.com/cbhali/',
    caption: 'CB HaLi official Instagram',
  },
  {
    id: 'fallback-6',
    media_type: 'IMAGE',
    media_url: '/images/team-photo.webp',
    permalink: 'https://www.instagram.com/cbhali/',
    caption: 'CB HaLi official Instagram',
  },
]

function getMediaSource(item: InstagramMediaItem) {
  if (item.media_type === 'VIDEO') {
    return item.thumbnail_url ?? item.media_url
  }

  return item.media_url ?? item.thumbnail_url
}

export async function getInstagramFeed(limit = 6) {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN
  const userId = process.env.INSTAGRAM_USER_ID

  if (!token || !userId) {
    return {
      posts: fallbackPosts.slice(0, limit),
      isLive: false,
    }
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&limit=${limit}&access_token=${token}`,
      { next: { revalidate: 3600 } },
    )

    if (!response.ok) {
      throw new Error(`Instagram API responded with ${response.status}`)
    }

    const payload = await response.json() as { data?: InstagramMediaItem[] }
    const posts = (payload.data ?? []).filter((item) => Boolean(getMediaSource(item))).slice(0, limit)

    if (!posts.length) {
      return {
        posts: fallbackPosts.slice(0, limit),
        isLive: false,
      }
    }

    return {
      posts,
      isLive: true,
    }
  } catch (error) {
    console.error('Unable to fetch Instagram feed', error)

    return {
      posts: fallbackPosts.slice(0, limit),
      isLive: false,
    }
  }
}

export function getInstagramMediaUrl(item: InstagramMediaItem) {
  return getMediaSource(item)
}
