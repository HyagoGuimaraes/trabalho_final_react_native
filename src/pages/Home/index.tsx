import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { getPosts, Post } from "../../service/PostService";
import { styles } from "./style";
import { useAuth } from "../../auth/useAuth";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const data = await getPosts();
    console.log("POSTS RECEBIDOS DA API:", data);
    if (data) {
      setPosts(data.reverse());
    }
  };


  return (
    <View style={styles.container}>

      <LinearGradient
        colors={["#fff", "#e8e8e8"]}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>MyDietGram</Text>

      </LinearGradient>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id || Math.random().toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <View style={styles.postHeader}>
              <Image source={{ uri: item.userAvatar || "https://i.imgur.com/placeholder.png"}} style={styles.avatar} />
              <Text style={styles.username}>{item.username}</Text>
            </View>

            <View style={styles.imagemContainer}>
              <Image source={{ uri: item.image }} style={styles.postImage} />
            </View>

            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}
