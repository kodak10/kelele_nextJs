import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeroSearch from "@/components/home/HeroSearch";
import FeaturedProviders from "@/components/home/FeaturedProviders";
import BecomeProvider from "@/components/home/BecomeProvider";
import Categories from "@/components/home/Categories";
import Expertise from "@/components/home/Expertise";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import Newsletter from "@/components/home/Newsletter";
import Testimonials from "@/components/home/Testimonials";
import AppDownload from "@/components/home/AppDownload";
import TrustStrip from "@/components/home/TrustStrip";
import MediaUniverses from "@/components/home/MediaUniverses";

export const metadata = {
  title: "KELELE — La super-application de l'écosystème événementiel africain",
  description:
    "Trouvez des prestataires certifiés, demandez des devis, payez en Mobile Money et gérez vos billets QR code. Lancement à Abidjan et Lagos.",
};
export default function Home() {
  return (
    <>
      <div id="wrapper">
        {/* <div className="tf-top-bar flex items-center justify-center">
          <p>Lancement sur les marchés pilotes : Abidjan et Lagos.</p>
        </div> */}

        <Header1 overlay />
        <HeroSearch />
        <div className="main-content pt-0 pb-0">
          {/* 1. Explorer */}
          <Categories />
          <FeaturedProviders />
          <UpcomingEvents />
          {/* 2. Valeur pour les professionnels */}
          <BecomeProvider />
          {/* 3. Confiance */}
          <TrustStrip />
          <Expertise />
          <Testimonials />
          <Newsletter />
          <AppDownload />
          {/* 4. Médias, Awards, Academy */}
          <MediaUniverses />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
