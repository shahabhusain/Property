import { create } from "zustand";

export const useCartStore = create((set) => ({
  isChat: false,
  isOpen: false,
  cart: [], // Main cart
  cart1: [], // Off-plan cart
  
  toggleCart: (product) => set((state) => {
    const isProductInCart = state.cart.some((item) => item.id === product.id);

    if (isProductInCart) {
      return { cart: state.cart.filter((item) => item.id !== product.id) };
    } else {
      return { cart: [...state.cart, product] };
    }
  }),

  removeCart: (productId) => set((state) => ({
    cart: state.cart.filter(item => item.id !== productId)
  })),

  toggleCart1: (product) => set((state) => {
    const isProductInCart = state.cart1.some((item) => item.id === product.id); // Correctly check against cart1

    if (isProductInCart) {
      return { cart1: state.cart1.filter((item) => item.id !== product.id) }; // Update cart1
    } else {
      return { cart1: [...state.cart1, product] }; // Add to cart1
    }
  }),

  removeCart1: (productId) => set((state) => ({
    cart1: state.cart1.filter(item => item.id !== productId) // Correctly filter cart1
  })),

  openModal: () => set({ isOpen: true }), 
  closeModal: () => set({ isOpen: false }), 

  openChat: () => set({ isChat: true }), 
  closeChat: () => set({ isChat: false }), 
}));
