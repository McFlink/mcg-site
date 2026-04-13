export type Service = {
  id: string
  title: string
  description: string
  points: string[]
}

export const services: Service[] = [
  {
    id: 'fiber',
    title: 'Fiber',
    description:
      'Vi bygger robusta fibernät från stomme till sista kunduttag, med spårbar dokumentation och fokus på kvalitet.',
    points: ['Fiber', 'Mätning', 'Dokumentation mot kund'],
  },
  {
    id: 'schakt',
    title: 'Mark & anläggning',
    description:
      'Erfarna maskinförare och moderna maskiner för säkra schakter i gata, park och industrimiljöer.',
    points: ['Maskiner för jobbet', 'Gräv', 'Återställning'],
  },
  {
    id: 'mark',
    title: 'Sten- och plattsättning',
    description:
      'Planering och utförande av plattsättning och andra markarbeten.',
    points: ['Marksten', 'Planering', 'Dokumentation'],
  },
  {
    id: 'samarbeten',
    title: 'Stolta samarbetspartners',
    description:
      'Ingen kund är för liten. Vi samarbetar med skolor, kommuner och privatkunder i hela regionen.',
    points: ['Skolor', 'Kommuner', 'Privatkunder'],
  },
  {
    id: 'service',
    title: 'Reparation & underhåll',
    description:
      'Vi håller vad vi lovar. Reparerar och underhåller med kvalitetstänk. Snabba insatser vid driftstopp.',
    points: ['Felsökning', 'Inspektioner', 'Material i lager'],
  },
]
