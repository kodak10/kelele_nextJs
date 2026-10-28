import ProviderDetail from "@/components/providers/ProviderDetail";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import { providers } from "@/data/kelele";
import React from "react";

export function generateStaticParams() {
  return providers.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const provider = providers.find((p) => p.slug === params.slug) || providers[0];
  return {
    title: `${provider.title} || KELELE`,
    description: `Fiche prestataire KELELE : ${provider.title} (${provider.city}). Devis, paiement Mobile Money sécurisé et réservation.`,
  };
}

export default function page({ params }) {
  return (
    <>
      <div id="wrapper">
        {/* <div className="tf-top-bar flex items-center justify-center">
          <p>Lancement sur les marchés pilotes : Abidjan et Lagos.</p>
        </div> */}

        <Header1 />
        <div className="main-content pt-0">
          <ProviderDetail slug={params.slug} />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
