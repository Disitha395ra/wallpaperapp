import axios from "axios";
import Constants from "expo-constants";

const UNSPLASH_ACCESS_KEY = Constants.expoConfig.extra.UNSPLASH_ACCESS_KEY;



const BASE_URL = "https://api.unsplash.com";

export const fetchWallpapers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/photos/random`, {
      params: {
        count: 15, // Number of wallpapers
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
