import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { FlatList, Image, TouchableOpacity, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { getPosts, Post } from "../../service/PostService";
import { styles } from "./style";
import { useAuth } from "../../auth/useAuth";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const data = await getPosts();
    // console.log("POSTS RECEBIDOS DA API:", data);
    if (data) {
      setPosts(data.reverse());
    }
  };

  const handleLike = (postId: string) => {
    setPosts((prev) =>
      prev.map((item) => {
        if (item.id === postId) {
          const liked = !item.likedByUser;
          return {
            ...item,
            likedByUser: liked,
            likes: liked ? (item.likes || 0) + 1 : (item.likes || 0) - 1,
          };
        }
        return item;
      })
    );
  };

  const handleComment = (postId: string) => {
    console.log("Abrir comentários do post:", postId);
    // Aqui você pode abrir modal ou navegar pra tela de comentários
    // Exemplo se tiver React Navigation:
    // navigation.navigate("Comments", { postId })
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
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <View style={styles.postHeader}>
              <Image source={{ uri: item.userAvatar }} style={styles.avatar} />
              <Text style={styles.username}>{item.username}</Text>
            </View>

            <Image source={{ uri: item.image }} style={styles.postImage} />

            <View style={styles.postActions}>
              <TouchableOpacity onPress={() => handleLike(item.id!)}>
                <Feather
                  name="heart"
                  size={28}
                  style={styles.postActionsIcon}
                  color={item.likedByUser ? "red" : "black"}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleComment(item.id!)}>
                <Feather
                  name="message-circle"
                  size={28}
                  style={styles.postActionsIcon}
                />
              </TouchableOpacity>
            </View>


            {item.likes !== undefined && item.likes > 0 && (
              <Text style={styles.likesText}>{item.likes} curtidas</Text>
            )}

            {item.createdAt && (
              <Text style={styles.postDate}>
                {new Date(item.createdAt).toLocaleDateString("pt-BR")}
              </Text>
            )}

            <Text style={styles.description}>
              <Text style={styles.usernameDesc}>{item.username} </Text>
              {item.description}
            </Text>
          </View>
        )}
      />

    </View>
  );
}