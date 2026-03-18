import Hero from "@/components/sections/Hero";
import SoundcloudPlayer from "@/components/sections/SoundcloudPlayer";
import FeaturedReleases from "@/components/sections/FeaturedReleases";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import releasesData from "@/data/releases.json";
import eventsData from "@/data/events.json";
import productsData from "@/data/products.json";

export default function HomePage() {
  const featuredReleases = releasesData.slice(0, 3);
  const featuredProducts = productsData.filter((p) => p.featured);

  return (
    <>
      <Hero />
      <SoundcloudPlayer />
      <FeaturedReleases releases={featuredReleases} />
      <UpcomingEvents events={eventsData} />
      <FeaturedProducts products={featuredProducts} />
    </>
  );
}
