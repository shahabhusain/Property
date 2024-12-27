import { create } from "zustand";
import { axiosPrivateForm } from "../lib/axios"; // Make sure this is your axios instance

export const useCartStore = create((set) => ({
  isChat: false,
  isOpen: false,
  data: null,
  error: null,
  loading: false,
  cart: [],
  cart1: [],
  properties: [],
  searchResults: [], 

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
    const isProductInCart = state.cart1.some((item) => item.id === product.id);
    if (isProductInCart) {
      return { cart1: state.cart1.filter((item) => item.id !== product.id) };
    } else {
      return { cart1: [...state.cart1, product] };
    }
  }),

  removeCart1: (productId) => set((state) => ({
    cart1: state.cart1.filter(item => item.id !== productId)
  })),

  openModal: () => set({ isOpen: true }),

  closeModal: () => set({ isOpen: false }),

  openChat: () => set({ isChat: true }),

  closeChat: () => set({ isChat: false }),

  // Fetch data from API
  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axiosPrivateForm.get("/auth/get-current-user");
      set({ data: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  searchProperties: async (params) => {
    console.log("params", params)
    try {
      const response = await axiosPrivateForm.post(`/si/search-properties?title=${params.title}&location=${params.location}&bed=${params.bed}&bath=${params.bath}&price=${params.price}&page=1&limit=${23}`);
      set({ properties: response.data?.data || []});
    } catch (error) {
      console.error('Error fetching search properties:', error.message);
    }
  },

  fetchProperties: async () => {
    try {
      const response = await axiosPrivateForm.get('/si/properties');
      set({ properties: response.data?.data || [] });
    } catch (error) {
      console.error('Error fetching all properties:', error.message);
    }
  },
}));
