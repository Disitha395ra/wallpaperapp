import axios from "axios";
import { UNSPLASH_ACCESS_KEY } from "@env";

const BASE_URL = "https://api.unsplash.com";

export const fetchWallpapers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/photos/random`, {
      params: {
        count: 10, // Number of wallpapers
        query: "wallpaper", // Search keyword
        client_id: UNSPLASH_ACCESS_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching wallpapers:", error);
    return [];
  }
};
