import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { getPosts, Post } from "../../service/PostService";
import { styles } from "./style";
import { useAuth } from "../../auth/useAuth";

export default function Home() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (user?.id) {
      loadPosts(user.id);
    }
  }, [user?.id]);

  const loadPosts = async (userId: string) => {
    const data = await getPosts({ userId });
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

      <ScrollView showsVerticalScrollIndicator={false}>
        {posts.map((post) => (
          <View key={post.id} style={styles.postContainer}>
        
            <View style={styles.postHeader}>
              <Image source={{ uri: post.image }} style={styles.avatar} />
              <Text style={styles.username}>{post.username}</Text>
            </View>

            <View style={styles.imagemContainer}>
              <Image source={{ uri: post.image }} style={styles.postImage} />
            </View>

            <Text style={styles.description}>{post.description}</Text>

          </View>
        ))}
      </ScrollView>
    </View>
  );
}
