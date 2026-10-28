import React from "react";
import PageLayout from "@/components/pages/PageLayout";
import QuoteRequest from "@/components/cart/QuoteRequest";

export const metadata = {
  title: "Demande de devis || KELELE",
  description: "Envoyez votre demande de devis aux prestataires sélectionnés.",
};
export default function page() {
  return (
    <PageLayout title="Demande de devis" subtitle="Envoyez votre demande aux prestataires de votre panier">
      <QuoteRequest />
    </PageLayout>
  );
}
