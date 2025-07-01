import { HotelType } from "@/interfaces/Hotel";
import { create } from "zustand";

interface HotelState {
  hotels: HotelType[];
  loading: boolean;
  error: boolean;
  fetchHotels: (filters?: Record<string, string>) => Promise<void>;
}

export const useHotelStore = create<HotelState>((set) => ({
  hotels: [],
  loading: false,
  error: false,
  fetchHotels: async (filters = {}) => {
    set({ loading: true, error: false });
    let url = "/api/hotels";

    const params = new URLSearchParams();
    if (filters.rating) params.append("rating", filters.rating);
    if (filters.priceMin) params.append("priceMin", filters.priceMin);
    if (filters.priceMax) params.append("priceMax", filters.priceMax);

    url += "?" + params.toString();

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        set({ hotels: data, loading: false });
      }
    } catch (error) {
      console.error("Error fetching hotels:", error);
      set({ error: true, loading: false });
    }
  },
}));
