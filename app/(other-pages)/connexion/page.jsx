import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Login from "@/components/otherPages/Login";
import React from "react";

export const metadata = {
  title: "Connexion || KELELE",
  description: "Connectez-vous à votre espace KELELE : client, prestataire, organisateur ou administrateur.",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <div className="tf-top-bar flex items-center justify-center">
          <p>Lancement sur les marchés pilotes : Abidjan et Lagos.</p>
        </div>
        <Header1 />
        <Login />
        <Footer1 />
      </div>
    </>
  );
}
