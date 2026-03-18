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
      <div id="section-hero"><Hero /></div>

      <Waveform variant="divider" color="var(--accent)"    frequency={4}  amplitude={20} />
      <Waveform variant="divider" color="var(--neon-blue)" frequency={6}  amplitude={12} />

      <div id="section-music"><SoundcloudPlayer /></div>

      <Waveform variant="divider" color="var(--neon-blue)" frequency={3}  amplitude={22} />
      <Waveform variant="divider" color="var(--neon-pink)" frequency={7}  amplitude={10} />

      <div id="section-releases"><FeaturedReleases releases={featuredReleases} /></div>

      <Waveform variant="divider" color="var(--neon-pink)" frequency={5}  amplitude={18} />
      <Waveform variant="divider" color="var(--neon-red)"  frequency={8}  amplitude={8}  />

      <div id="section-events"><UpcomingEvents events={eventsData} /></div>

      <Waveform variant="divider" color="var(--neon-red)"  frequency={4}  amplitude={16} />
      <Waveform variant="divider" color="var(--accent)"    frequency={9}  amplitude={7}  />

      <div id="section-products"><FeaturedProducts products={featuredProducts} /></div>

      <Waveform variant="divider" color="var(--accent)"    frequency={5}  amplitude={24} />
      <Waveform variant="divider" color="var(--neon-blue)" frequency={3}  amplitude={14} />

      <div id="section-gallery"><PhotoGallery /></div>
    </>
  );
}
