import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Dashboard from "@/components/dashboard/Dashboard";
import { roles, roleOrder } from "@/data/kelele-dashboard";
import { notFound } from "next/navigation";
import React from "react";

export function generateStaticParams() {
  const out = [];
  for (const r of roleOrder) {
    out.push({ role: r, section: [] });
    for (const item of roles[r].nav) {
      if (item.slug) out.push({ role: r, section: [item.slug] });
    }
  }
  return out;
}

export function generateMetadata({ params }) {
  const cfg = roles[params.role];
  return { title: `${cfg ? cfg.title : "Espace"} || KELELE` };
}

export default function page({ params }) {
  const cfg = roles[params.role];
  if (!cfg) notFound();
  const section = (params.section && params.section[0]) || "";
  if (section && !cfg.pages[section]) notFound();
  return (
    <>
      <div id="wrapper">
        {/* <div className="tf-top-bar flex items-center justify-center">
          <p>Lancement sur les marchés pilotes : Abidjan et Lagos.</p>
        </div> */}
        <Header1 />
        <Dashboard role={params.role} section={section} />
        <Footer1 />
      </div>
    </>
  );
}
