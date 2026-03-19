import Hero from "@/components/sections/Hero";
import SoundcloudPlayer from "@/components/sections/SoundcloudPlayer";
import Waveform from "@/components/ui/Waveform";
import FeaturedReleases from "@/components/sections/FeaturedReleases";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import PhotoGallery from "@/components/sections/PhotoGallery";
import releasesJson from "@/data/releases.json";
import eventsJson from "@/data/events.json";
import productsJson from "@/data/products.json";
import { client } from "@/lib/sanity";
import { releasesQuery, eventsQuery, productsQuery } from "@/lib/queries";

export default async function HomePage() {
  const hasSanity = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [releasesData, eventsData, productsData]: [any[], any[], any[]] = hasSanity
    ? await Promise.all([
        client.fetch(releasesQuery),
        client.fetch(eventsQuery),
        client.fetch(productsQuery),
      ])
    : [
        releasesJson.map((r) => ({ ...r, id: String(r.id) })),
        eventsJson.map((e) => ({ ...e, id: String(e.id) })),
        productsJson.map((p) => ({ ...p, id: String(p.id) })),
      ];

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
