import { notFound } from "next/navigation";
import productsJson from "@/data/products.json";
import { client } from "@/lib/sanity";
import { productBySlugQuery } from "@/lib/queries";
import ProductDetail from "./ProductDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let product: any;

  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    product = await client.fetch(productBySlugQuery, { slug });
  } else {
    const found = productsJson.find((p) => p.slug === slug);
    if (found) product = { ...found, id: String(found.id) };
  }

  if (!product) notFound();

  return <ProductDetail product={product} />;
}
