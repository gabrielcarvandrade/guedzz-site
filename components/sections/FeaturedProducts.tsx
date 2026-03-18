"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";

interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  images: string[];
  sizes: string[];
  description: string;
  featured: boolean;
}

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between mb-10"
      >
        <div>
          <p className="text-[var(--accent)] text-xs font-semibold uppercase tracking-[0.3em] mb-2">
            Merch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Loja</h2>
        </div>
        <Link
          href="/loja"
          className="hidden sm:flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
        >
          Ver loja completa <ArrowRight size={14} />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      <Link
        href="/loja"
        className="sm:hidden mt-6 flex items-center justify-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
      >
        Ver loja completa <ArrowRight size={14} />
      </Link>
    </section>
  );
}
