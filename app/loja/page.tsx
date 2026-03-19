"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Tag } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import PageBackground from "@/components/ui/PageBackground";
import PageHeader from "@/components/ui/PageHeader";
import productsJson from "@/data/products.json";
import { client } from "@/lib/sanity";
import { productsQuery } from "@/lib/queries";

const categories = [
  { value: "all", label: "Todos" },
  { value: "camiseta", label: "Camisetas" },
  { value: "acessorio", label: "Acessorios" },
  { value: "vinil", label: "Vinil" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ProductData = any;

export default function LojaPage() {
  const [category, setCategory] = useState("all");
  const [allProducts, setAllProducts] = useState<ProductData[]>(
    productsJson.map((p) => ({ ...p, id: String(p.id) }))
  );

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return;
    client.fetch(productsQuery).then((data) => { if (data?.length) setAllProducts(data); });
  }, []);

  const filtered =
    category === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === category);

  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      <PageBackground variant="waves" intensity="low" />
      
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <PageHeader
          tag="Merch"
          title="Loja"
          description="Camisetas, acessorios e muito mais. Represente o movimento."
        />

        {/* Promo Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 p-5 rounded-xl bg-gradient-to-r from-[var(--accent)]/20 via-[var(--neon-pink)]/10 to-[var(--neon-blue)]/20 border border-[var(--accent)]/30 relative overflow-hidden"
        >
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
            animate={{ x: ["-200%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          />
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center">
                <Sparkles size={20} className="text-[var(--accent)]" />
              </div>
              <div>
                <p className="font-bold text-lg">Frete Gratis</p>
                <p className="text-[var(--text-muted)] text-sm">Em compras acima de R$ 200</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)] text-black text-sm font-bold">
              <Tag size={14} />
              USE: GUEDZZ10
            </div>
          </div>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-2 mb-10 flex-wrap"
        >
          {categories.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setCategory(value)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                category === value
                  ? "bg-[var(--accent)] text-black shadow-[0_0_20px_rgba(160,32,240,0.4)]"
                  : "border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="relative">
                {/* Hover glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)] to-[var(--neon-blue)] rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                <ProductCard product={product} />
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-[var(--text-muted)] py-20"
          >
            Nenhum produto encontrado nessa categoria.
          </motion.p>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border)] text-[var(--text-muted)] text-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Envio em ate 5 dias uteis
          </div>
        </motion.div>
      </div>
    </div>
  );
}
