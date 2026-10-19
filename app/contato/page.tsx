import type { Metadata } from "next";
import { site } from "@/content/site";
import { ContactContent } from "@/components/Pages";

export const metadata: Metadata = {
  title: site.metadata.contact.title,
  description: site.metadata.contact.description,
};

export default function ContactPage() {
  return <main id="conteudo-principal" className="inner-page contact-page"><ContactContent /></main>;
}
