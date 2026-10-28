import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Register from "@/components/auth/Register";
import React from "react";
export const metadata = {
  title: "Inscription || KELELE",
  description: "Créez votre compte KELELE : client, prestataire ou organisateur.",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        {/* <div className="tf-top-bar flex items-center justify-center">
          <p>Lancement sur les marchés pilotes : Abidjan et Lagos.</p>
        </div> */}
        <Header1 />
        <Register />
        <Footer1 />
      </div>
    </>
  );
}
