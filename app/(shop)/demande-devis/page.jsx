import React from "react";
import KPage from "@/components/otherPages/k/KPage";
import KCheckout from "@/components/shop/KCheckout";

export const metadata = {
  title: "Demande de devis || KELELE",
  description: "Envoyez votre demande de devis aux prestataires sélectionnés.",
};
export default function page() {
  return (
    <KPage title="Demande de devis" subtitle="Envoyez votre demande aux prestataires de votre panier">
      <KCheckout />
    </KPage>
  );
}
