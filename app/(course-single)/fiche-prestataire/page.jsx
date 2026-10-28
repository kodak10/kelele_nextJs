import { redirect } from "next/navigation";
import { providerHrefById } from "@/data/kelele";

export default function page() {
  redirect(providerHrefById(1));
}
