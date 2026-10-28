// Tableaux de bord KELELE (client, prestataire, organisateur, admin).
// Les valeurs sont des DONNÉES D'EXEMPLE à remplacer par l'API (/users/me, /bookings, /quotes, ...).

const BASE = "/espace";

export const roleOrder = ["client", "prestataire", "organisateur", "admin"];

const status = {
  demandee: "Demandée",
  confirmee: "Confirmée",
  honoree: "Honorée",
  annulee: "Annulée",
};

export const roles = {
  client: {
    label: "Client",
    title: "Espace client",
    welcome: "Bienvenue sur votre espace client",
    subtitle: "Suivez vos devis, réservations, billets et paiements.",
    cta: { label: "Trouver un prestataire", href: "/prestataires" },
    nav: [
      { slug: "", label: "Aperçu", icon: "flaticon-activity" },
      { slug: "reservations", label: "Réservations", icon: "flaticon-calendar" },
      { slug: "devis", label: "Devis", icon: "flaticon-document" },
      { slug: "billets", label: "Mes billets", icon: "flaticon-bag" },
      { slug: "paiements", label: "Paiements", icon: "flaticon-dollar" },
      { slug: "avis", label: "Mes avis", icon: "flaticon-heart" },
      { slug: "profil", label: "Profil", icon: "flaticon-setting-1" },
    ],
    pages: {
      "": {
        title: "Aperçu",
        kpis: [
          { icon: "flaticon-calendar", label: "Réservations à venir", value: "2" },
          { icon: "flaticon-document", label: "Devis en attente", value: "3" },
          { icon: "flaticon-bag", label: "Billets", value: "4" },
          { icon: "flaticon-message-1", label: "Messages non lus", value: "1" },
        ],
        table: {
          title: "Dernières réservations",
          columns: ["Prestation", "Prestataire", "Date", "Statut"],
          rows: [
            ["DJ & sonorisation", "DJ & Animation — Abidjan", "12 déc.", status.confirmee],
            ["Buffet 150 personnes", "Traiteur — Abidjan", "12 déc.", status.demandee],
            ["Photographe mariage", "Photo & Vidéo — Abidjan", "07 fév.", status.demandee],
          ],
        },
      },
      reservations: {
        title: "Réservations",
        table: {
          columns: ["Prestation", "Prestataire", "Date", "Statut"],
          rows: [
            ["DJ & sonorisation", "DJ & Animation — Abidjan", "12 déc.", status.confirmee],
            ["Buffet 150 personnes", "Traiteur — Abidjan", "12 déc.", status.demandee],
            ["Décoration de salle", "Décoration — Abidjan", "12 déc.", status.annulee],
            ["Photographe mariage", "Photo & Vidéo — Abidjan", "07 fév.", status.demandee],
          ],
        },
      },
      devis: {
        title: "Devis",
        table: {
          columns: ["Demande", "Prestataire", "Envoyé le", "Statut"],
          rows: [
            ["Buffet 150 personnes", "Traiteur — Abidjan", "02 nov.", "En attente de réponse"],
            ["Décoration florale", "Décoration — Abidjan", "28 oct.", "Devis reçu"],
            ["Photographe mariage", "Photo & Vidéo — Abidjan", "20 oct.", "Devis accepté"],
          ],
        },
      },
      billets: {
        title: "Mes billets",
        tickets: [
          { event: "Soirée Afrobeats", place: "Abidjan, Côte d'Ivoire", date: "12 déc.", state: "Valide" },
          { event: "Salon du mariage", place: "Lagos, Nigeria", date: "19 déc.", state: "Valide" },
        ],
      },
      paiements: {
        title: "Paiements",
        table: {
          columns: ["Référence", "Prestation", "Moyen de paiement", "Statut"],
          rows: [
            ["PAY-0001", "DJ & sonorisation", "Mobile Money", "Fonds retenus"],
            ["PAY-0002", "Billet — Soirée Afrobeats", "Carte bancaire", "Payé"],
          ],
        },
      },
      avis: {
        title: "Mes avis",
        note: "Vous pourrez noter un prestataire une fois la prestation honorée.",
        table: {
          columns: ["Prestataire", "Prestation", "Avis"],
          rows: [["DJ & Animation — Abidjan", "DJ & sonorisation", "À rédiger après la prestation"]],
        },
      },
      profil: {
        title: "Profil",
        form: [
          { label: "Nom complet", type: "text", name: "fullName" },
          { label: "E-mail", type: "email", name: "email", readOnly: true },
          { label: "Téléphone", type: "tel", name: "phone" },
          { label: "Ville", type: "text", name: "city" },
        ],
      },
    },
  },

  prestataire: {
    label: "Prestataire",
    title: "Espace prestataire",
    welcome: "Bienvenue sur votre espace prestataire",
    subtitle: "Gérez vos fiches de service, devis, réservations et paiements.",
    cta: { label: "Ajouter un service", href: `${BASE}/prestataire/services?nouveau=1` },
    nav: [
      { slug: "", label: "Aperçu", icon: "flaticon-activity" },
      { slug: "services", label: "Mes services", icon: "flaticon-play-1" },
      { slug: "kyc", label: "Documents KYC", icon: "flaticon-check" },
      { slug: "devis", label: "Demandes de devis", icon: "flaticon-document" },
      { slug: "reservations", label: "Réservations", icon: "flaticon-calendar" },
      { slug: "paiements", label: "Paiements", icon: "flaticon-dollar" },
      { slug: "avis", label: "Avis reçus", icon: "flaticon-heart" },
      { slug: "profil", label: "Profil", icon: "flaticon-setting-1" },
    ],
    pages: {
      "": {
        title: "Aperçu",
        kpis: [
          { icon: "flaticon-document", label: "Demandes de devis", value: "5" },
          { icon: "flaticon-calendar", label: "Réservations à venir", value: "3" },
          { icon: "flaticon-dollar", label: "Paiements en retenue", value: "2" },
          { icon: "flaticon-heart", label: "Avis reçus", value: "8" },
        ],
        table: {
          title: "Demandes récentes",
          columns: ["Client", "Prestation", "Date de l'événement", "Statut"],
          rows: [
            ["Cliente particulière", "Mariage — sonorisation", "07 fév.", "Nouvelle"],
            ["Organisateur pro", "Soirée d'entreprise", "15 jan.", "Devis envoyé"],
            ["Membre de la diaspora", "Anniversaire", "21 fév.", "Nouvelle"],
          ],
        },
      },
      services: { title: "Mes services", kind: "services" },
      kyc: { title: "Documents KYC", kind: "kyc" },
      devis: {
        title: "Demandes de devis",
        table: {
          columns: ["Client", "Prestation", "Date", "Statut"],
          rows: [
            ["Cliente particulière", "Mariage — sonorisation", "07 fév.", "À répondre"],
            ["Organisateur pro", "Soirée d'entreprise", "15 jan.", "Devis envoyé"],
            ["Membre de la diaspora", "Anniversaire", "21 fév.", "À répondre"],
          ],
        },
      },
      reservations: {
        title: "Réservations",
        table: {
          columns: ["Client", "Prestation", "Date", "Statut"],
          rows: [
            ["Cliente particulière", "Mariage — sonorisation", "07 fév.", status.confirmee],
            ["Organisateur pro", "Soirée d'entreprise", "15 jan.", status.demandee],
            ["Client particulier", "Baptême", "03 nov.", status.honoree],
          ],
        },
      },
      paiements: {
        title: "Paiements",
        note: "Les fonds sont retenus puis libérés par le partenaire de paiement après validation de la prestation.",
        table: {
          columns: ["Référence", "Réservation", "Moyen", "Statut"],
          rows: [
            ["PAY-0101", "Mariage — sonorisation", "Mobile Money", "Fonds retenus"],
            ["PAY-0102", "Baptême", "Mobile Money", "Libéré"],
          ],
        },
      },
      avis: {
        title: "Avis reçus",
        table: {
          columns: ["Client", "Prestation", "Avis"],
          rows: [["Client particulier", "Baptême", "Avis à venir (exemple)"]],
        },
      },
      profil: {
        title: "Profil",
        form: [
          { label: "E-mail", type: "email", name: "email", readOnly: true },
          { label: "Nom de l'activité", type: "text", name: "business" },
          { label: "Catégorie de service", type: "text", name: "category" },
          { label: "Zone géographique", type: "text", name: "zone" },
          { label: "Téléphone", type: "tel", name: "phone" },
        ],
      },
    },
  },

  organisateur: {
    label: "Organisateur pro",
    title: "Espace organisateur",
    welcome: "Bienvenue sur votre espace organisateur",
    subtitle: "Pilotez vos événements, votre billetterie et vos prestataires.",
    cta: { label: "Créer un événement", href: `${BASE}/organisateur/evenements?nouveau=1` },
    nav: [
      { slug: "", label: "Aperçu", icon: "flaticon-activity" },
      { slug: "evenements", label: "Mes événements", icon: "flaticon-calendar" },
      { slug: "billetterie", label: "Billetterie", icon: "flaticon-bag" },
      { slug: "scan", label: "Scan des billets", icon: "flaticon-check" },
      { slug: "prestataires", label: "Prestataires", icon: "flaticon-user" },
      { slug: "reservations", label: "Réservations", icon: "flaticon-document" },
      { slug: "paiements", label: "Paiements", icon: "flaticon-dollar" },
      { slug: "profil", label: "Organisation", icon: "flaticon-setting-1" },
    ],
    pages: {
      "": {
        title: "Aperçu",
        kpis: [
          { icon: "flaticon-calendar", label: "Événements actifs", value: "2" },
          { icon: "flaticon-bag", label: "Billets émis", value: "120" },
          { icon: "flaticon-check", label: "Billets scannés", value: "0" },
          { icon: "flaticon-user", label: "Prestataires réservés", value: "6" },
        ],
        table: {
          title: "Événements",
          columns: ["Événement", "Ville", "Date", "Billetterie"],
          rows: [
            ["Soirée Afrobeats", "Abidjan", "12 déc.", "Ouverte"],
            ["Salon du mariage", "Lagos", "19 déc.", "Ouverte"],
          ],
        },
      },
      evenements: { title: "Mes événements", kind: "events" },
      billetterie: { title: "Billetterie", kind: "tickets" },
      scan: {
        title: "Scan des billets",
        note: "Le scan QR est prévu en moins d'une seconde, y compris hors-ligne. Cette page accueillera le scanner (appareil photo) de l'application.",
        table: {
          columns: ["Événement", "Dernier scan", "Résultat"],
          rows: [["Soirée Afrobeats", "—", "Aucun scan pour le moment"]],
        },
      },
      prestataires: {
        title: "Prestataires",
        table: {
          columns: ["Prestataire", "Catégorie", "Ville", "Statut"],
          rows: [
            ["DJ & Sonorisation", "DJ & Animation", "Abidjan", status.confirmee],
            ["Traiteur événementiel", "Traiteurs & Pâtisserie", "Abidjan", status.demandee],
            ["Décorateur", "Décoration & Scénographie", "Lagos", status.confirmee],
          ],
        },
      },
      reservations: {
        title: "Réservations",
        table: {
          columns: ["Prestation", "Prestataire", "Date", "Statut"],
          rows: [
            ["Sonorisation", "DJ & Sonorisation", "12 déc.", status.confirmee],
            ["Traiteur", "Traiteur événementiel", "12 déc.", status.demandee],
          ],
        },
      },
      paiements: {
        title: "Paiements",
        table: {
          columns: ["Référence", "Objet", "Moyen", "Statut"],
          rows: [
            ["PAY-0201", "Vente de billets", "Mobile Money / Carte", "Encaissé"],
            ["PAY-0202", "Sonorisation", "Mobile Money", "Fonds retenus"],
          ],
        },
      },
      profil: {
        title: "Organisation",
        form: [
          { label: "Nom de l'organisation", type: "text", name: "org" },
          { label: "E-mail professionnel", type: "email", name: "email", readOnly: true },
          { label: "Téléphone", type: "tel", name: "phone" },
          { label: "Ville", type: "text", name: "city" },
        ],
      },
    },
  },

  admin: {
    label: "Administrateur",
    title: "Back-office",
    welcome: "Bienvenue dans le back-office KELELE",
    subtitle: "Utilisateurs, validation KYC, modération, paiements et support.",
    cta: { label: "Voir le site", href: "/" },
    nav: [
      { slug: "", label: "Aperçu", icon: "flaticon-activity" },
      { slug: "utilisateurs", label: "Utilisateurs", icon: "flaticon-user" },
      { slug: "kyc", label: "Dossiers KYC", icon: "flaticon-check" },
      { slug: "categories", label: "Catégories", icon: "flaticon-programming" },
      { slug: "services", label: "Services", icon: "flaticon-play-1" },
      { slug: "moderation", label: "Modération", icon: "flaticon-message-1" },
      { slug: "evenements", label: "Événements", icon: "flaticon-calendar" },
      { slug: "paiements", label: "Transactions", icon: "flaticon-dollar" },
      { slug: "audit", label: "Journal d'audit", icon: "flaticon-document" },
      { slug: "parametres", label: "Paramètres", icon: "flaticon-setting-1" },
    ],
    pages: {
      "": {
        title: "Aperçu",
        kpis: [
          { icon: "flaticon-user", label: "Utilisateurs", value: "—" },
          { icon: "flaticon-check", label: "KYC à valider", value: "2" },
          { icon: "flaticon-message-1", label: "Signalements", value: "1" },
          { icon: "flaticon-dollar", label: "Transactions du jour", value: "—" },
        ],
        table: {
          title: "À traiter",
          columns: ["Type", "Détail", "Priorité"],
          rows: [
            ["KYC", "Prestataire — justificatif d'activité", "Normale"],
            ["KYC", "Prestataire — pièce d'identité", "Normale"],
            ["Modération", "Avis signalé", "Haute"],
          ],
        },
      },
      utilisateurs: {
        title: "Utilisateurs",
        table: {
          columns: ["Utilisateur", "Rôle", "Canal", "Statut"],
          rows: [
            ["Cliente particulière", "Client", "E-mail", "Actif"],
            ["DJ professionnel", "Prestataire", "Téléphone", "KYC en cours"],
            ["Event planner", "Organisateur", "E-mail", "Actif"],
          ],
        },
      },
      kyc: { title: "Dossiers KYC", kind: "adminKyc" },
      categories: { title: "Catégories de prestataires", kind: "adminCategories" },
      services: { title: "Services à valider", kind: "adminServices" },
      moderation: {
        title: "Modération",
        table: {
          columns: ["Contenu", "Auteur", "Motif", "Action"],
          rows: [["Avis sur un prestataire", "Client particulier", "Signalé", "À examiner"]],
        },
      },
      evenements: { title: "Événements", kind: "adminEvents" },
      paiements: {
        title: "Transactions",
        note: "Les paiements sont gérés par le PSP partenaire ; KELELE ne stocke aucune donnée de carte.",
        table: {
          columns: ["Référence", "Type", "Moyen", "Statut"],
          rows: [
            ["PAY-0001", "Réservation", "Mobile Money", "Fonds retenus"],
            ["PAY-0002", "Billet", "Carte bancaire", "Payé"],
          ],
        },
      },
      audit: {
        title: "Journal d'audit",
        table: {
          columns: ["Date", "Action", "Auteur"],
          rows: [
            ["Aujourd'hui", "Validation KYC", "Admin"],
            ["Hier", "Modération d'un avis", "Support"],
          ],
        },
      },
      parametres: {
        title: "Paramètres",
        form: [
          { label: "Nom de la plateforme", type: "text", name: "name" },
          { label: "E-mail du support", type: "email", name: "support" },
        ],
      },
    },
  },
};

export const quickAccess = roleOrder.map((r) => ({
  role: r,
  label: roles[r].label,
  href: `${BASE}/${r}`,
}));
