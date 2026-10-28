import React from "react";
import PageLayout from "@/components/pages/PageLayout";
import Cart from "@/components/cart/Cart";

export const metadata = {
  title: "Panier || KELELE",
  description: "Vos prestations sélectionnées sur KELELE.",
};
export default function page() {
  return (
    <PageLayout title="Panier" subtitle="Les prestations que vous souhaitez réserver">
      <Cart />
    </PageLayout>
  );
}
