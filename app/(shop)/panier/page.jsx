import React from "react";
import KPage from "@/components/otherPages/k/KPage";
import KCart from "@/components/shop/KCart";

export const metadata = {
  title: "Panier || KELELE",
  description: "Vos prestations sélectionnées sur KELELE.",
};
export default function page() {
  return (
    <KPage title="Panier" subtitle="Les prestations que vous souhaitez réserver">
      <KCart />
    </KPage>
  );
}
