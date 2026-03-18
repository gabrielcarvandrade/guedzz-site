"use client";

import { useEffect } from "react";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/store";
import Button from "./Button";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, itemCount } =
    useCartStore();

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const formattedTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total());

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-[var(--surface)] border-l border-[var(--border)] z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)]">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-[var(--accent)]" />
            <h2 className="font-semibold">
              Carrinho
              {itemCount() > 0 && (
                <span className="ml-2 text-xs bg-[var(--accent)] text-black px-1.5 py-0.5 rounded-full font-bold">
                  {itemCount()}
                </span>
              )}
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-1.5 rounded-md hover:bg-[var(--surface-hover)] text-[var(--text-muted)] hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-[var(--text-muted)]">
              <ShoppingBag size={40} strokeWidth={1} />
              <p className="text-sm">Seu carrinho está vazio</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex gap-3 p-3 rounded-lg bg-[var(--background)] border border-[var(--border)]"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm leading-tight">{item.name}</p>
                  <p className="text-[var(--text-muted)] text-xs mt-0.5">
                    Tamanho: {item.size}
                  </p>
                  <p className="text-[var(--accent)] text-sm font-semibold mt-1">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(item.price)}
                  </p>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeItem(item.id, item.size)}
                    className="text-[var(--text-muted)] hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.size, item.quantity - 1)
                      }
                      className="w-6 h-6 rounded-md bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center hover:border-[var(--accent)] transition-colors"
                    >
                      <Minus size={10} />
                    </button>
                    <span className="text-sm w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.size, item.quantity + 1)
                      }
                      className="w-6 h-6 rounded-md bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center hover:border-[var(--accent)] transition-colors"
                    >
                      <Plus size={10} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[var(--border)] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[var(--text-muted)] text-sm">Total</span>
              <span className="text-lg font-bold text-[var(--accent)]">{formattedTotal}</span>
            </div>
            <Button
              variant="primary"
              className="w-full"
              onClick={() => alert("Integração de pagamento em breve! Entre em contato pelo WhatsApp para finalizar seu pedido.")}
            >
              Finalizar Pedido
            </Button>
            <p className="text-center text-xs text-[var(--text-muted)]">
              Pagamento seguro via PIX ou cartão
            </p>
          </div>
        )}
      </div>
    </>
  );
}
