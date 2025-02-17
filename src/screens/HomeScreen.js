import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { fetchWallpapers } from "../services/unsplashService";

const HomeScreen = ({ navigation }) => {
  const [wallpapers, setWallpapers] = useState([]);

  useEffect(() => {
    loadWallpapers();
  }, []);

  const loadWallpapers = async () => {
    const data = await fetchWallpapers();
    setWallpapers(data);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={wallpapers}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("WallpaperDetail", {
                imageUrl: item.urls.full,
              })
            }
          >
            <Image source={{ uri: item.urls.small }} style={styles.image} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  image: { width: "100%", height: 200, margin: 5, borderRadius: 10 },
});

export default HomeScreen;
