import { create } from "zustand";

export interface CartItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  size: string;
  image: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  total: () => number;
  itemCount: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,

  addItem: (newItem) => {
    set((state) => {
      const existing = state.items.find(
        (i) => i.id === newItem.id && i.size === newItem.size
      );
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === newItem.id && i.size === newItem.size
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
          isOpen: true,
        };
      }
      return { items: [...state.items, { ...newItem, quantity: 1 }], isOpen: true };
    });
  },

  removeItem: (id, size) => {
    set((state) => ({
      items: state.items.filter((i) => !(i.id === id && i.size === size)),
    }));
  },

  updateQuantity: (id, size, quantity) => {
    if (quantity <= 0) {
      get().removeItem(id, size);
      return;
    }
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id && i.size === size ? { ...i, quantity } : i
      ),
    }));
  },

  clearCart: () => set({ items: [] }),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  total: () =>
    get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),

  itemCount: () =>
    get().items.reduce((sum, i) => sum + i.quantity, 0),
}));
