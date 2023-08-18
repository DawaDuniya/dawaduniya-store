import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-hot-toast";
import { Product } from "@/types";


interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  remove1Item: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: Product) => {
      const currentItems = get().items;
      const existingItemIndex = currentItems.findIndex(item => item.id === data.id);

      if (existingItemIndex !== -1) {
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        set({ items: updatedItems });
        toast.success("Item quantity increased in cart.");
      } else {
        set({
          items: [
            ...currentItems,
            {
              ...data,
              quantity: 1, // Initialize the quantity property for new items
            },
          ],
        });
        toast.success("Item added to cart.");
      }
    },
    removeItem: (id: string) => {
      set({ items: [...get().items.filter(item => item.id !== id)] });
      toast.error("Item removed from the cart.");
    },
    remove1Item: (id: string) => {
      const currentItems = get().items;
      const existingItem = currentItems.find(item => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        const updatedItems = currentItems.map(item => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });

        set({ items: updatedItems });
        toast.error("One item removed from the cart.");
      } else if (existingItem && existingItem.quantity === 1) {
        // Remove the entire item if quantity is 1
        set({ items: currentItems.filter(item => item.id !== id) });
        toast.error("Item removed from the cart.");
      }
    },
    removeAll: () => set({ items: [] }),
  }), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage),
  })
);

export default useCart;