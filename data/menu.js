// Menu principal KELELE (desktop + mobile). Les routes du template sont conservées.
const grid = "/prestataires";
const cat = (name) => `${grid}?category=${encodeURIComponent(name)}`;

export const menuItems = [
  { title: "Accueil", href: "/" },
  { title: "Prestataires", href: "/annuaire" },
  { title: "Événements", href: "/evenements" },
  {
    title: "Pages",
    isActive: true,
    subItems: [
      { title: "Devenir prestataire", href: "/devenir-prestataire" },
      { title: "À propos", href: "/a-propos" },
      { title: "Contact", href: "/contact" },
      { title: "FAQ", href: "/faq" },
      { title: "Tarifs", href: "/tarifs" },
      { title: "Conditions", href: "/conditions" },
    ],
  },
];

// Menu déroulant « Catégories » (header) et section catégories du menu mobile
const sub = (items, name) =>
  items.map((title, i) => ({ id: i + 1, title, href: cat(name) }));

export const categories = [
  { id: 1, title: "DJ & Animation", subItems: sub(["Mariages", "Soirées privées", "Événements d'entreprise", "Concerts"], "DJ & Animation") },
  { id: 2, title: "Traiteurs & Pâtisserie", subItems: sub(["Buffets", "Cocktails", "Pièces montées", "Banquets"], "Traiteurs & Pâtisserie") },
  { id: 3, title: "Décoration & Scénographie", subItems: sub(["Décoration florale", "Décoration de salle", "Scénographie", "Éclairage"], "Décoration & Scénographie") },
  { id: 4, title: "Photo & Vidéo", subItems: sub(["Photographe", "Vidéaste", "Drone", "Album et montage"], "Photo & Vidéo") },
  { id: 5, title: "Salles & Lieux", subItems: sub(["Salles de réception", "Espaces de conférence", "Lieux en plein air"], "Salles & Lieux") },
  { id: 6, title: "Event planners", subItems: sub(["Mariages clé en main", "Séminaires et MICE", "Événements privés"], "Event planners") },
  { id: 7, title: "Artistes & Musique live", subItems: sub(["Groupes live", "Chanteurs", "Animation scénique"], "Artistes & Musique live") },
  { id: 8, title: "Billetterie & Concerts", subItems: sub(["Billetterie QR code", "Contrôle d'accès", "Concerts"], "Billetterie & Concerts") },
];
