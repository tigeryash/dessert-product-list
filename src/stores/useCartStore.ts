import { create } from "zustand";
import { CartState, DessertItem } from "../types/types";

type CartStore = {
  items: CartState;
  confirm: boolean;
  confirmOrder: () => void;
  addItem: (item: DessertItem) => void;
  removeItem: (item: DessertItem) => void;
  getTotal: () => number;
  getItemCount: () => number;
  clearCart: () => void;
  isAddedToCart: (item: DessertItem) => boolean;
  deleteItem: (item: DessertItem) => void;
};

const useCartStore = create<CartStore>((set, get) => ({
  items: {},
  confirm: false,
  confirmOrder: () => {
    set({ confirm: true });
  },
  addItem: (item) => {
    set((state) => ({
      items: {
        ...state.items, //if items already had something within the cart it'll be kept and the next lines add to it.
        [item.title]: {
          quantity: state.items[item.title]?.quantity + 1 || 1,
          item,
        },
      },
    }));
  },
  removeItem: (item) => {
    set((state) => {
      const newItems = { ...state.items };
      if (newItems[item.title]?.quantity === 1) {
        delete newItems[item.title];
        return { items: newItems };
      }
      return {
        items: {
          ...newItems,
          [item.title]: {
            quantity: state.items[item.title].quantity - 1,
            item,
          },
        },
      };
    });
  },
  deleteItem: (item: DessertItem) => {
    set((state) => {
      const newItems = { ...state.items };
      delete newItems[item.title];
      return { items: newItems };
    });
  },
  getTotal: () => {
    const { items } = get();
    let total = 0;
    for (const key in items) {
      //loops throughitems by every key
      const cartItem = items[key]; //cartItem is the value of the key (the quantity and item)
      total += cartItem.quantity * cartItem.item.price;
    }
    return total;
  },
  getItemCount: () => {
    const { items } = get();
    let count = 0;
    for (const key in items) {
      count += items[key].quantity;
    }
    return count;
  },
  isAddedToCart: (item: DessertItem) => {
    const { items } = get();
    return items[item.title] !== undefined;
  },
  clearCart: () => {
    set({ items: {} });
  },
}));

export default useCartStore;
