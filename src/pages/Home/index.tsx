import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./style";
import { getPosts, Post } from "../../service/PostService";

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
