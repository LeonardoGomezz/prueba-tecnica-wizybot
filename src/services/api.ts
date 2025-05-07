import axios from "axios";
import type { Product } from "../types/product";

const API_BASE_URL = import.meta.env.VITE_WIZYBOT_API_URL;

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/products/demo-product-list`
    );
    return response.data || []; // Returns the array directly if the response is an array
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
