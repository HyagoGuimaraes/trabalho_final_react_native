import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { getPosts, Post } from "../../service/PostService";
import { styles } from "./style";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const data = await getPosts();
    setPosts(data.reverse()); // últimos primeiro
  };

  return (
    <LinearGradient colors={["#E6F7D9", "#A1D97B"]} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {posts.map((post) => (
          <View key={post.id} style={styles.postContainer}>

            {/* HEADER */}
            <View style={styles.postHeader}>
              <Image source={{ uri: post.image }} style={styles.avatar} />
              <Text style={styles.username}>{post.username}</Text>
            </View>

            {/* IMAGEM */}
            <Image source={{ uri: post.image }} style={styles.postImage} />

            {/* LEGENDA */}
            <Text style={styles.description}>{post.description}</Text>

            {/* DATA */}
            <Text style={styles.date}>
              {new Date(post.createdAt).toLocaleString("pt-BR")}
            </Text>
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}
