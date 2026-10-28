import { redirect } from "next/navigation";
import { providerHrefById } from "@/data/kelele";

export default function page({ params }) {
  redirect(providerHrefById(Number(params.id)));
}
