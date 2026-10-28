import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeroSearch from "@/components/homes/home-1/Hero2Search";
import PopularCourses from "@/components/homes/home-1/PopularCourses";
import Instractors from "@/components/homes/home-1/Instractors";
import BecomeInstactor from "@/components/homes/home-1/BecomeInstactor";
import KCategories from "@/components/homes/home-1/KCategories";
import KFacts from "@/components/homes/home-1/KFacts";
import KEvents from "@/components/homes/home-1/KEvents";
import KNewsletter from "@/components/homes/home-1/KNewsletter";
import KTestimonials from "@/components/homes/home-1/KTestimonials";
import KDownloadApp from "@/components/homes/home-1/KDownloadApp";

export const metadata = {
  title: "KELELE — La super-application de l'écosystème événementiel africain",
  description:
    "Trouvez des prestataires certifiés, demandez des devis, payez en Mobile Money et gérez vos billets QR code. Lancement à Abidjan et Lagos.",
};
export default function HomePage1() {
  return (
    <>
      <div id="wrapper">
        {/* <div className="tf-top-bar flex items-center justify-center">
          <p>Lancement sur les marchés pilotes : Abidjan et Lagos.</p>
        </div> */}

        <Header1 />
        <HeroSearch />
        <div className="main-content pb-63">
          <KFacts />
          <KCategories showHeading={false} />
          <PopularCourses />
          <KEvents />
          <Instractors />
          <BecomeInstactor />
          <KNewsletter />
          <KTestimonials />
          <KDownloadApp />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
