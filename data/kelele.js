// Contenu KELELE (home-1) — source : proposition technique KELELE (sept. 2026).
// Les éléments marqués "exemple" sont des placeholders à remplacer par des données réelles.

export const keleleCategories = [
  { imgSrc: "/images/categories/categories-05.jpg", category: "DJ & Animation", delay: "0.3s" },
  { imgSrc: "/images/categories/categories-07.jpg", category: "Traiteurs & Pâtisserie", delay: "0.33s" },
  { imgSrc: "/images/categories/categories-01.jpg", category: "Décoration & Scénographie", delay: "0.35s" },
  { imgSrc: "/images/categories/categories-04.jpg", category: "Photo & Vidéo", delay: "0.37s" },
  { imgSrc: "/images/categories/categories-06.jpg", category: "Salles & Lieux", delay: "0.4s" },
  { imgSrc: "/images/categories/categories-02.jpg", category: "Event planners", delay: "0.43s" },
  { imgSrc: "/images/categories/categories-03.jpg", category: "Artistes & Musique live", delay: "0.45s" },
  { imgSrc: "/images/categories/categories-08.jpg", category: "Billetterie & Concerts", delay: "0.47s" },
];

export const keleleAcademic = [
  { href: "/prestataires", imgSrc: "/images/section/academisc-1.jpg", text: "Mariages <br /> & Cérémonies" },
  { href: "/prestataires", imgSrc: "/images/section/academisc-2.jpg", text: "Anniversaires & Fêtes privées" },
  { href: "/prestataires", imgSrc: "/images/section/academisc-3.jpg", text: "Conférences & Événements MICE" },
  { href: "/prestataires", imgSrc: "/images/section/academisc-4.jpg", text: "Concerts & <br /> Billetterie" },
  { href: "/prestataires", imgSrc: "/images/section/academisc-5.jpg", text: "Diaspora : organisez <br /> à distance" },
];

// Onglets de la section "Prestataires populaires"
export const providerTabs = [
  "DJ & Animation",
  "Traiteurs & Pâtisserie",
  "Décoration & Scénographie",
  "Photo & Vidéo",
  "Salles & Lieux",
];

// Exemples de fiches prestataires
export const providers = [
  { id: 1, imgSrc: "/images/courses/courses-01.jpg", title: "DJ & Sonorisation pour mariages et soirées privées", city: "Abidjan, Côte d'Ivoire", tag: "Vérifié", filterCategories: ["DJ & Animation"] },
  { id: 2, imgSrc: "/images/courses/courses-02.jpg", title: "Animation & MC pour événements d'entreprise", city: "Lagos, Nigeria", filterCategories: ["DJ & Animation"] },
  { id: 3, imgSrc: "/images/courses/courses-03.jpg", title: "Traiteur — buffets, cocktails et pièces montées", city: "Abidjan, Côte d'Ivoire", tag: "Vérifié", filterCategories: ["Traiteurs & Pâtisserie"] },
  { id: 4, imgSrc: "/images/courses/courses-04.jpg", title: "Pâtisserie événementielle sur commande", city: "Lagos, Nigeria", filterCategories: ["Traiteurs & Pâtisserie"] },
  { id: 5, imgSrc: "/images/courses/courses-05.jpg", title: "Décoration florale et scénographie de salle", city: "Abidjan, Côte d'Ivoire", tag: "Vérifié", filterCategories: ["Décoration & Scénographie"] },
  { id: 6, imgSrc: "/images/courses/courses-06.jpg", title: "Photographe & vidéaste de mariage", city: "Abidjan, Côte d'Ivoire", filterCategories: ["Photo & Vidéo"] },
  { id: 7, imgSrc: "/images/courses/courses-07.jpg", title: "Couverture photo et drone pour événements", city: "Lagos, Nigeria", tag: "Vérifié", filterCategories: ["Photo & Vidéo"] },
  { id: 8, imgSrc: "/images/courses/courses-08.jpg", title: "Salle de réception modulable, jusqu'à 500 invités", city: "Abidjan, Côte d'Ivoire", filterCategories: ["Salles & Lieux"] },
];

// Prestataires vedettes (exemples)
export const featuredProviders = [
  { id: 1, providerId: 1, imgSrc: "/images/instructors/instructors-01.jpg", name: "DJ & Sonorisation", description: "Mariages, soirées et concerts", city: "Abidjan" },
  { id: 2, providerId: 3, imgSrc: "/images/instructors/instructors-02.jpg", name: "Traiteur événementiel", description: "Buffets, cocktails et banquets", city: "Abidjan" },
  { id: 3, providerId: 5, imgSrc: "/images/instructors/instructors-03.jpg", name: "Décorateur d'intérieur", description: "Scénographie et décoration florale", city: "Lagos" },
  { id: 4, providerId: 6, imgSrc: "/images/instructors/instructors-04.jpg", name: "Photographe", description: "Mariages et événements corporate", city: "Abidjan" },
  { id: 5, providerId: 9, imgSrc: "/images/instructors/instructors-05.jpg", name: "Event planner", description: "Organisation clé en main", city: "Lagos" },
  { id: 6, providerId: 11, imgSrc: "/images/instructors/instructors-06.jpg", name: "Artiste live", description: "Musique live et animation scénique", city: "Abidjan" },
];

// Événements (exemples — dates à remplacer)
export const keleleEvents = [
  { id: 6, location: "Abidjan, Côte d'Ivoire", time: "Billetterie avec QR code", title: "Soirée Afrobeats — exemple d'événement billetterie", date: "12", month: "Décembre", delay: "0.3s" },
  { id: 7, location: "Lagos, Nigeria", time: "Billetterie avec QR code", title: "Salon du mariage et de l'événementiel", date: "19", month: "Décembre", delay: "0.35s" },
  { id: 8, location: "Abidjan, Côte d'Ivoire", time: "Entrée sur invitation", title: "Conférence d'entreprise (MICE) — exemple", date: "15", month: "Janvier", delay: "0.4s" },
  { id: 9, location: "Dakar, Sénégal", time: "Billetterie avec QR code", title: "Concert live — prochaine extension", date: "30", month: "Janvier", delay: "0.45s" },
];

// Témoignages (exemples — à remplacer par de vrais retours)
export const keleleTestimonials = [
  { imgSrc: "/images/avatar/user-4.png", name: "Cliente particulière", role: "Mariage, Abidjan", rating: 5, testimonial: "J'ai comparé plusieurs prestataires, demandé des devis et payé en Mobile Money sans quitter l'application." },
  { imgSrc: "/images/avatar/user-5.png", name: "DJ professionnel", role: "Prestataire, Lagos", rating: 5, testimonial: "Ma fiche me donne de la visibilité et les réservations sont confirmées de façon claire." },
  { imgSrc: "/images/avatar/user-6.png", name: "Event planner", role: "Organisateur, Abidjan", rating: 5, testimonial: "La messagerie, les devis et la billetterie QR sont réunis au même endroit." },
  { imgSrc: "/images/avatar/user-7.png", name: "Membre de la diaspora", role: "Organise à distance", rating: 5, testimonial: "Je prépare l'événement de ma famille depuis l'étranger avec des prestataires vérifiés." },
  { imgSrc: "/images/avatar/user-8.png", name: "Responsable événementiel", role: "Entreprise, Lagos", rating: 5, testimonial: "Les paiements sécurisés et les avis nous aident à choisir les bons prestataires." },
];

// Prestataires supplémentaires pour couvrir toutes les catégories (exemples)
providers.push(
  { id: 9, imgSrc: "/images/courses/courses-09.jpg", title: "Organisation clé en main de mariages et réceptions", city: "Abidjan, Côte d'Ivoire", tag: "Vérifié", filterCategories: ["Event planners"] },
  { id: 10, imgSrc: "/images/courses/courses-11.jpg", title: "Agence événementielle pour séminaires et événements MICE", city: "Lagos, Nigeria", filterCategories: ["Event planners"] },
  { id: 11, imgSrc: "/images/courses/courses-12.jpg", title: "Groupe de musique live et chanteurs pour cérémonies", city: "Abidjan, Côte d'Ivoire", filterCategories: ["Artistes & Musique live"] },
  { id: 12, imgSrc: "/images/courses/courses-13.jpg", title: "Billetterie et contrôle d'accès par QR code", city: "Lagos, Nigeria", tag: "Vérifié", filterCategories: ["Billetterie & Concerts"] }
);

export const providerCities = ["Abidjan, Côte d'Ivoire", "Lagos, Nigeria"];

// Événements — liste complète (exemples, dates à remplacer)
export const keleleEventCategories = ["Mariage", "Concert", "Conférence (MICE)", "Salon"];
export const keleleEventLocations = ["Abidjan, Côte d'Ivoire", "Lagos, Nigeria", "Dakar, Sénégal"];
export const keleleEventsAll = [
  { id: 6, imgSrc: "/images/events/event-1.jpg", date: { day: "12", month: "Déc" }, location: "Abidjan, Côte d'Ivoire", time: "20:00 - 02:00", title: "Soirée Afrobeats (exemple d'événement avec billetterie)", filterCategories: ["Concert"], wowDelay: "0s" },
  { id: 7, imgSrc: "/images/events/event-2.jpg", date: { day: "19", month: "Déc" }, location: "Lagos, Nigeria", time: "10:00 - 18:00", title: "Salon du mariage et de l'événementiel", filterCategories: ["Salon", "Mariage"], wowDelay: "0.1s" },
  { id: 8, imgSrc: "/images/events/event-3.jpg", date: { day: "15", month: "Jan" }, location: "Abidjan, Côte d'Ivoire", time: "09:00 - 17:00", title: "Conférence d'entreprise (exemple MICE)", filterCategories: ["Conférence (MICE)"], wowDelay: "0.2s" },
  { id: 9, imgSrc: "/images/events/event-4.jpg", date: { day: "30", month: "Jan" }, location: "Dakar, Sénégal", time: "19:00 - 23:00", title: "Concert live (prochaine extension)", filterCategories: ["Concert"], wowDelay: "0.3s" },
  { id: 10, imgSrc: "/images/events/event-5.jpg", date: { day: "07", month: "Fév" }, location: "Abidjan, Côte d'Ivoire", time: "11:00 - 19:00", title: "Cérémonie de mariage sur invitation (exemple)", filterCategories: ["Mariage"], wowDelay: "0.4s" },
  { id: 11, imgSrc: "/images/events/event-6.jpg", date: { day: "21", month: "Fév" }, location: "Lagos, Nigeria", time: "08:30 - 16:30", title: "Forum des organisateurs et prestataires (exemple)", filterCategories: ["Conférence (MICE)", "Salon"], wowDelay: "0.5s" },
];

// Slugs lisibles pour les URL des fiches : /prestataires/<slug>
const slugify = (t) =>
  t
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
providers.forEach((p) => {
  p.slug = `${slugify(p.title).slice(0, 60).replace(/-+$/, "")}-${p.id}`;
});
export const providerHref = (p) => `/prestataires/${p.slug}`;
export const providerHrefById = (id) => {
  const p = providers.find((x) => x.id === id) || providers[0];
  return providerHref(p);
};

// Slugs des événements : /evenements/<slug>
keleleEventsAll.forEach((e) => {
  e.slug = `${slugify(e.title).slice(0, 60).replace(/-+$/, "")}-${e.id}`;
});
export const eventHrefById = (id) => {
  const e = keleleEventsAll.find((x) => x.id == id) || keleleEventsAll[0];
  return `/evenements/${e.slug}`;
};
