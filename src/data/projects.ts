export type Project = {
  id: string
  title: string
  location: string
  image: string
  summary: string
  tags: string[]
  year?: string
}

export const projects: Project[] = [
  {
    id: 'uppsala',
    title: 'Fiberutbyggnad i villaområde',
    location: 'Karlskoga',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Stomnät och accessnät för 420 hushåll. Projektering, schakt, blåsfiber och driftsättning med full dokumentation.',
    tags: ['Fiber', 'Schakt', 'Driftsättning'],
  },
  {
    id: 'stockholm',
    title: 'Kanalisation i innerstadsmiljö',
    location: 'Forshaga',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Styrd borrning under spårtrafik och trafikerade gator. Koordinering med ledningsägare och krav på minimal störning.',
    tags: ['Styrd borrning', 'Trafikledning', 'Kanalisation'],
  },
  {
    id: 'vasteras',
    title: 'Industriområde – robust anslutning',
    location: 'Karlstad',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Fiber och el-kanalisation till ny logistikpark. Grundläggning för teknikbod och finplanering av hårdgjorda ytor.',
    tags: ['Industri', 'Grundläggning', 'Fiberblåsning'],
  },
  {
    id: 'orebro',
    title: 'Landsbygdsring och redundans',
    location: 'Kristinehamn',
    year: '2023',
    image:
      'https://images.unsplash.com/photo-1504992963429-56f5d58b1a48?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Ringmatat fibernät för att skapa redundans till tre orter. Sträckor i både skog och tätort med komplex logistik.',
    tags: ['Redundans', 'Planering', 'Servicefönster'],
  },
]
