"use client";

import { motion } from "framer-motion";
import ProductCard from "@/components/ui/ProductCard";
import productsData from "@/data/products.json";

export default function LojaPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[var(--accent)] text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            Merch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Loja</h1>
          <p className="text-[var(--text-muted)] text-lg max-w-xl">
            Camisetas, acessórios e muito mais. Represente o movimento.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {productsData.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
