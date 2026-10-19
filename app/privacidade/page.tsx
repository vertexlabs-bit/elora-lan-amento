import type { Metadata } from "next";
import { site } from "@/content/site";
import { PrivacyContent } from "@/components/Pages";

export const metadata: Metadata = {
  title: site.metadata.privacy.title,
  description: site.metadata.privacy.description,
};

export default function PrivacyPage() {
  return <main id="conteudo-principal" className="inner-page privacy-page"><PrivacyContent /></main>;
}
