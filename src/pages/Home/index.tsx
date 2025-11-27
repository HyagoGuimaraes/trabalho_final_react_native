import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState, useCallback } from "react";
import { FlatList, Image, TouchableOpacity, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { getPosts, Post } from "../../service/PostService";
import { styles } from "./style";
import { useAuth } from "../../auth/useAuth";
import { CommentModal } from "../../components/CommentModal";
import { useIsFocused } from "@react-navigation/native";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { user } = useAuth();
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      loadPosts();
    }
  }, [isFocused]);

  const loadPosts = async () => {
    const data = await getPosts();
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
    setSelectedPostId(postId);
    setIsCommentModalOpen(true);
  };

  
  const handleSubmitComment = (comment: string) => {
    if (!selectedPostId) return;

    setPosts((prev) =>
      prev.map((item) => {
        if (item.id === selectedPostId) {
          return {
            ...item,
            comments: [...(item.comments || []), {
              user: user?.name || "Você",
              text: comment
            }],
          };
        }
        return item;
      })
    );

    setIsCommentModalOpen(false);
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#fff", "#e8e8e8"]} style={styles.header}>
        <Text style={styles.headerTitle}>MyDietGram</Text>
      </LinearGradient>

      <FlatList
        data={posts}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
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

     
            {typeof item.likes === "number" && item.likes > 0 && (
              <Text style={styles.likesText}>{item.likes} curtidas</Text>
            )}

          
            {item.createdAt && (
              <Text style={styles.postDate}>
                {new Date(item.createdAt).toLocaleDateString("pt-BR")}
              </Text>
            )}

    
            <Text style={styles.description}>
              <Text style={styles.usernameDesc}>{item.username || ""} </Text>
              {item.description || ""}
            </Text>

           
            {Array.isArray(item.comments) && item.comments.length > 0 && (
              <View style={{ marginTop: 8 }}>
                {item.comments.map((c, index) => (
                  <Text key={index} style={styles.commentText}>
                    <Text style={styles.usernameDesc}>{c.user || ""} </Text>
                    {c.text || ""}
                  </Text>
                ))}
              </View>
            )}
          </View>
        )}
      />

      <CommentModal
        isOpen={isCommentModalOpen}
        onClose={() => setIsCommentModalOpen(false)}
        onSubmit={handleSubmitComment}
      />
    </View>
  );
}
