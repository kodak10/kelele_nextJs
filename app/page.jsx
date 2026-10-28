import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeroSearch from "@/components/home/HeroSearch";
import PopularProviders from "@/components/home/PopularProviders";
import FeaturedProviders from "@/components/home/FeaturedProviders";
import BecomeProvider from "@/components/home/BecomeProvider";
import Categories from "@/components/home/Categories";
import Expertise from "@/components/home/Expertise";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import Newsletter from "@/components/home/Newsletter";
import Testimonials from "@/components/home/Testimonials";
import AppDownload from "@/components/home/AppDownload";

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

        <Header1 />
        <HeroSearch />
        <div className="main-content pb-63">
          <Expertise />
          <Categories showHeading={false} />
          <PopularProviders />
          <UpcomingEvents />
          <FeaturedProviders />
          <BecomeProvider />
          <Newsletter />
          <Testimonials />
          <AppDownload />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
