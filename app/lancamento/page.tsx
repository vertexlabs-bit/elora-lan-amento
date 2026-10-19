import type { Metadata } from "next";
import Script from "next/script";
import { site } from "@/content/site";
import { PageIntro } from "@/components/Pages";
import { BottleDetails, LaunchFilmSection, ProductInformation } from "@/components/HomeSections";
import { WaitlistForm } from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: site.metadata.launch.title,
  description: site.metadata.launch.description,
};

const product = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: site.product.name,
  description: site.product.name,
  image: "/images/frasco-960.webp",
  brand: { "@type": "Brand", name: site.name },
  category: site.product.shortName,
};

export default function LaunchPage() {
  return (
    <main id="conteudo-principal" className="inner-page launch-page">
      <PageIntro kicker={site.pages.launch.kicker} title={site.pages.launch.title} intro={site.pages.launch.intro} />
      <LaunchFilmSection />
      <ProductInformation />
      <BottleDetails />
      <WaitlistForm />
      <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }} />
    </main>
  );
}
