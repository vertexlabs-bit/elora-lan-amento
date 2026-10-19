import type { Metadata } from "next";
import { site } from "@/content/site";
import { Hero } from "@/components/FilmAndHero";
import { HomeSections } from "@/components/HomeSections";

export const metadata: Metadata = {
  title: site.metadata.home.title,
  description: site.metadata.home.description,
};

export default function HomePage() {
  return (
    <main id="conteudo-principal">
      <Hero />
      <HomeSections />
    </main>
  );
}
