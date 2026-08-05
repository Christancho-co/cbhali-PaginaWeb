/**
 * getInstagramFeed — helper para traer los últimos posts de Instagram
 * desde la Instagram Graph API (usando INSTAGRAM_ACCESS_TOKEN e
 * INSTAGRAM_USER_ID como variables de entorno). Si esas variables no están
 * configuradas, o si la API falla, devuelve fallbackPosts (fotos reales
 * ya usadas en el sitio) con `isLive: false` para que quien lo use pueda
 * distinguir datos reales de datos de respaldo.
 *
 * Usado por components/home/Instagram.tsx para el grid de la sección
 * Instagram del Home.
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
    media_url: '/images/home/insta-phone.webp',
    permalink: 'https://www.instagram.com/cb_hali/',
    caption: 'CB HaLi official Instagram',
  },
  {
    id: 'fallback-2',
    media_type: 'IMAGE',
    media_url: '/images/home/brick-rug.webp',
    permalink: 'https://www.instagram.com/cb_hali/',
    caption: 'CB HaLi official Instagram',
  },
  {
    id: 'fallback-3',
    media_type: 'IMAGE',
    media_url: '/images/home/catalog-drape.webp',
    permalink: 'https://www.instagram.com/cb_hali/',
    caption: 'CB HaLi official Instagram',
  },
  {
    id: 'fallback-4',
    media_type: 'IMAGE',
    media_url: '/images/home/product-rolls.webp',
    permalink: 'https://www.instagram.com/cb_hali/',
    caption: 'CB HaLi official Instagram',
  },
  {
    id: 'fallback-5',
    media_type: 'IMAGE',
    media_url: '/images/home/stairs-rug.webp',
    permalink: 'https://www.instagram.com/cb_hali/',
    caption: 'CB HaLi official Instagram',
  },
  {
    id: 'fallback-6',
    media_type: 'IMAGE',
    media_url: '/images/home/team.webp',
    permalink: 'https://www.instagram.com/cb_hali/',
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

export type InstagramProfile = {
  username: string
  name: string
  profilePictureUrl: string | null
  postsCount: string
  followersCount: string
  followingCount: string
  biography: string[]
}

/**
 * Valores reales de @cb_hali (capturados 2026-08, provistos por el
 * cliente) usados como respaldo mientras no haya credenciales de la API
 * conectadas. followers/posts/following se ven "congelados" en ese
 * estado; en vivo (isLive:true) vienen siempre actualizados de Meta.
 */
const fallbackProfile: InstagramProfile = {
  username: 'cb_hali',
  name: 'CB Hali',
  profilePictureUrl: null,
  postsCount: '1,092',
  followersCount: '26.4 mil',
  followingCount: '3,975',
  biography: [
    'Decoración de interiores',
    'Crafted for visionaries ✨',
    'Rugs & Fabrics',
    'Custom-made | Collections | Contract',
    '📍 Colombia - Miami - Panamá - Costa Rica',
  ],
}

/**
 * getInstagramProfile — trae usuario, nombre, foto de perfil y
 * estadisticas reales (para recrear el header completo de la app, no
 * solo el grid de fotos). Mismo patron de respaldo que getInstagramFeed:
 * si faltan credenciales o la llamada falla, devuelve fallbackProfile
 * con isLive:false.
 */
export async function getInstagramProfile() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN
  const userId = process.env.INSTAGRAM_USER_ID

  if (!token || !userId) {
    return { profile: fallbackProfile, isLive: false }
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/${userId}?fields=username,name,profile_picture_url,biography,followers_count,follows_count,media_count&access_token=${token}`,
      { next: { revalidate: 3600 } },
    )

    if (!response.ok) {
      throw new Error(`Instagram API responded with ${response.status}`)
    }

    const payload = (await response.json()) as {
      username?: string
      name?: string
      profile_picture_url?: string
      biography?: string
      followers_count?: number
      follows_count?: number
      media_count?: number
    }
    if (!payload.username) {
      return { profile: fallbackProfile, isLive: false }
    }

    return {
      profile: {
        username: payload.username,
        name: payload.name ?? fallbackProfile.name,
        profilePictureUrl: payload.profile_picture_url ?? null,
        postsCount: payload.media_count != null ? formatCount(payload.media_count) : fallbackProfile.postsCount,
        followersCount:
          payload.followers_count != null ? formatCount(payload.followers_count) : fallbackProfile.followersCount,
        followingCount:
          payload.follows_count != null ? formatCount(payload.follows_count) : fallbackProfile.followingCount,
        biography: payload.biography ? payload.biography.split('\n').filter(Boolean) : fallbackProfile.biography,
      },
      isLive: true,
    }
  } catch (error) {
    console.error('Unable to fetch Instagram profile', error)
    return { profile: fallbackProfile, isLive: false }
  }
}

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)} M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)} mil`
  return String(n)
}
