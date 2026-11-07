// Menu principal KELELE (desktop + mobile).
const grid = "/prestataires";
const cat = (name) => `${grid}?category=${encodeURIComponent(name)}`;

export const menuItems = [
  { title: "Accueil", href: "/" },
  // « Catégories » : méga-menu dédié, rempli dans Nav.jsx à partir des catégories gérées par l'admin
  { title: "Catégories", id: "explore", subItems: [] },
  { title: "Prestataires", href: "/prestataires" },
  { title: "Événements", href: "/evenements" },
  { title: "À propos", href: "/a-propos" },
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
