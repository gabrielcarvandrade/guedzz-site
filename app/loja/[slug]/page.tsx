"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ShoppingBag, Package, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { useCartStore } from "@/lib/store";
import productsData from "@/data/products.json";

interface Props {
  params: { slug: string };
}

export default function ProductPage({ params }: Props) {
  const product = productsData.find((p) => p.slug === params.slug);

  if (!product) notFound();

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const { addItem } = useCartStore();

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.images[0],
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-5">
        {/* Breadcrumb */}
        <Link
          href="/loja"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Voltar à loja
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center">
              <div className="flex flex-col items-center gap-3 text-[var(--text-muted)]">
                <Package size={64} strokeWidth={1} />
                <p className="text-sm">{product.name}</p>
              </div>
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3 mt-3">
                {product.images.map((img, i) => (
                  <div
                    key={i}
                    className="w-20 h-20 rounded-lg border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center"
                  >
                    <Package size={20} className="text-[var(--text-muted)]" strokeWidth={1} />
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-3xl font-semibold text-[var(--accent)]">{formattedPrice}</p>
            </div>

            <p className="text-[var(--text-muted)] leading-relaxed">{product.description}</p>

            {/* Size selector */}
            <div>
              <p className="text-sm font-semibold mb-3 flex items-center justify-between">
                Tamanho
                {selectedSize && (
                  <span className="text-[var(--accent)] font-normal">
                    Selecionado: {selectedSize}
                  </span>
                )}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-md border text-sm font-medium transition-all duration-150 ${
                      selectedSize === size
                        ? "border-[var(--accent)] bg-[var(--accent)] text-black"
                        : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to cart */}
            <div className="space-y-3 pt-2">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={handleAddToCart}
                disabled={!selectedSize}
              >
                <ShoppingBag size={16} />
                {added ? "Adicionado!" : "Adicionar ao Carrinho"}
              </Button>

              {!selectedSize && (
                <p className="text-xs text-[var(--text-muted)] text-center">
                  Selecione um tamanho para continuar
                </p>
              )}

              <p className="text-xs text-[var(--text-muted)] text-center">
                Frete calculado no checkout • Entrega em todo o Brasil
              </p>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                { label: "Material", value: "100% algodão" },
                { label: "Lavagem", value: "Máquina (30°C)" },
                { label: "Envio", value: "3-7 dias úteis" },
                { label: "Devolução", value: "7 dias" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)]"
                >
                  <p className="text-[var(--text-muted)] text-xs">{label}</p>
                  <p className="text-sm font-medium mt-0.5">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
