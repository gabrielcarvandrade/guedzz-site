"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Package } from "lucide-react";

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

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);

  return (
    <Link href={`/loja/${product.slug}`} className="group block">
      <div className="rounded-lg overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-[var(--accent)]/50 transition-all duration-300" style={{ transition: "border-color 0.3s, box-shadow 0.3s" }} onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 30px rgba(160,32,240,0.08)")} onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}>
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-[var(--border)]">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--surface)] to-[var(--border)]">
            <Package size={48} className="text-[var(--text-muted)]" />
          </div>
          {product.images?.[0] && (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-t from-black/60 to-transparent">
            <span className="flex items-center gap-2 text-sm font-semibold text-white">
              <ShoppingBag size={14} />
              Ver produto
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="font-medium text-[var(--text-primary)] leading-tight">{product.name}</h3>
          <p className="text-[var(--accent)] font-semibold mt-1">{formattedPrice}</p>
          <p className="text-[var(--text-muted)] text-xs mt-1">
            Tamanhos: {product.sizes?.join(", ") ?? "—"}
          </p>
        </div>
      </div>
    </Link>
  );
}
