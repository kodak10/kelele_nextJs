// En développement et avec `npm start`, le site tourne normalement.
// Pour un hébergement classique (FTP), la CI définit NEXT_OUTPUT=export :
// le site est alors exporté en fichiers statiques dans le dossier `out/`.
const isExport = process.env.NEXT_OUTPUT === "export";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  ...(isExport ? { output: "export", trailingSlash: true } : {}),
};

export default nextConfig;
