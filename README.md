# KELELE

La super-application de l'écosystème événementiel africain : prestataires certifiés,
devis, paiement Mobile Money et billetterie QR code. Lancement prévu à Abidjan et Lagos.

Le périmètre fonctionnel est décrit dans [docs/KELELE-proposition-technique.pdf](docs/KELELE-proposition-technique.pdf).

## Technologies

- [Next.js 14](https://nextjs.org) (App Router) et React 18
- Bootstrap 5, Swiper, SASS
- Données et authentification **simulées** pour l'instant (aucune API branchée)

## Démarrer

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de production
npm start          # serveur de production
```

Pour tester depuis un autre appareil du réseau : `npm run dev -- -H 0.0.0.0`.

## Pages

| Route | Contenu |
|---|---|
| `/` | Accueil : recherche, catégories, prestataires, événements |
| `/prestataires` | Annuaire (recherche, filtres catégorie et ville) |
| `/prestataires/[slug]` | Fiche prestataire, demande de devis, ajout au panier |
| `/evenements`, `/evenements/[slug]` | Événements et billetterie |
| `/panier`, `/demande-devis` | Panier de prestations et demande de devis groupée |
| `/connexion`, `/inscription` | Authentification (accès rapide de démonstration) |
| `/espace/[role]` | Tableaux de bord : `client`, `prestataire`, `organisateur`, `admin` |
| `/a-propos`, `/contact`, `/faq`, `/tarifs`, `/conditions`, `/devenir-prestataire` | Pages d'information |

## Structure

```
app/            routes (App Router)
components/     composants (home, providers, events, cart, dashboard, auth, pages, headers, footers, modals)
context/        panier de prestations et favoris
data/           contenu : catalogue, menu, tableaux de bord
public/         images, polices, icônes, feuilles de style (SCSS)
docs/           documentation du projet
```

## Mode démonstration

Tant que l'API n'est pas branchée, les données saisies (services, événements, dossiers KYC,
catégories, panier, demandes de devis) sont enregistrées dans le **navigateur** (`localStorage`,
clés `kelele:*`). L'admin voit donc ce que soumettent les autres espaces **sur le même navigateur**.

Les textes marqués « exemple » (prestataires, événements, témoignages) et les coordonnées de
contact sont des contenus provisoires à remplacer.

## Déploiement automatique (GitHub Actions → serveur FTP)

À chaque push sur `main` ou `v2`, le workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) :
1. installe les dépendances et construit le site en **export statique** (`NEXT_OUTPUT=export`) ;
2. envoie le contenu de `out/` sur le serveur par **FTPS** (port 21).

Les identifiants ne sont **jamais** dans le dépôt. À définir une fois dans GitHub
(*Settings → Secrets and variables → Actions*) :

| Type | Nom | Valeur |
|---|---|---|
| Secret | `FTP_SERVER` | `ftp.groupadvice.net` |
| Secret | `FTP_USERNAME` | l'identifiant FTP |
| Secret | `FTP_PASSWORD` | le mot de passe FTP |
| Variable (optionnelle) | `FTP_DIR` | dossier cible, relatif à la racine du compte FTP. Par défaut : `public_html/kelele/` (sous-domaine kelele.groupadvice.net) |

Sans ces secrets, le workflow construit le site mais n'envoie rien (un avertissement s'affiche).
Il peut aussi être lancé à la main : *Actions → Déploiement → Run workflow*.

Le site exporté est purement statique : les données de démonstration restent dans le navigateur
des visiteurs, il n'y a pas de serveur Node à faire tourner.
