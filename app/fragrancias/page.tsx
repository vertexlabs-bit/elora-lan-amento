import type { Metadata } from "next";
import { site } from "@/content/site";
import { FragranceCollection } from "@/components/HomeSections";
import { PageIntro } from "@/components/Pages";

export const metadata: Metadata = {
  title: site.metadata.fragrances.title,
  description: site.metadata.fragrances.description,
};

export default function FragrancesPage() {
  return (
    <main id="conteudo-principal" className="inner-page fragrances-page">
      <PageIntro kicker={site.pages.fragrances.kicker} title={site.pages.fragrances.title} intro={site.pages.fragrances.intro} />
      <FragranceCollection />
    </main>
  );
}
