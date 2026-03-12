export type Service = {
  id: string
  title: string
  description: string
  points: string[]
}

export const services: Service[] = [
  {
    id: 'fiber',
    title: 'Fiberinstallation & blåsfiber',
    description:
      'Vi bygger robusta fibernät från stomme till sista kunduttag, med spårbar dokumentation och tydlig egenkontroll.',
    points: ['Stomnät och access', 'Mätning och OTDR', 'Dokumentation mot beställare'],
  },
  {
    id: 'schakt',
    title: 'Schakt & markarbeten',
    description:
      'Erfarna maskinförare och moderna maskiner för säkra schakter i gata, park och industrimiljöer.',
    points: ['Maskinpark för trånga miljöer', 'Trafikanordningsplaner', 'Återställning enligt krav'],
  },
  {
    id: 'borrning',
    title: 'Styrd borrning & kanalisation',
    description:
      'Planering och utförande av styrd borrning, dragning av kanalisation och tryckprovning innan driftsättning.',
    points: ['PEM, rör och dukter', 'Tryckprovning', 'Samordning med ledningsägare'],
  },
  {
    id: 'bygg',
    title: 'Bygg & grundläggning',
    description:
      'Plintar, fundament, betongplattor och mindre byggnationer som binder ihop mark och teknik.',
    points: ['Grundläggning för teknikbodar', 'Finplanering', 'Prefabricerade lösningar'],
  },
  {
    id: 'service',
    title: 'Serviceavtal & drift',
    description:
      'Jour och planerat underhåll för nät och anläggning. Snabba insatser vid driftstopp.',
    points: ['Felsökning på plats', 'Planerade inspektioner', 'Reservdelar i lager'],
  },
]
