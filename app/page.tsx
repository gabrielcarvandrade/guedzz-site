import Hero from "@/components/sections/Hero";
import SoundcloudPlayer from "@/components/sections/SoundcloudPlayer";
import Waveform from "@/components/ui/Waveform";
import FeaturedReleases from "@/components/sections/FeaturedReleases";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import PhotoGallery from "@/components/sections/PhotoGallery";
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
      <Waveform variant="divider" color="var(--accent)" frequency={4} amplitude={18} />
      <FeaturedReleases releases={featuredReleases} />
      <UpcomingEvents events={eventsData} />
      <FeaturedProducts products={featuredProducts} />
      <PhotoGallery />
    </>
  );
}
