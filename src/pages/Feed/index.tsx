import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { getPosts } from "../../service/PostsLocal";
import { styles } from "./feedStyle";
import { Post } from "../../@types/Post";

export default function Feed({ navigation } : {navigation: any}) {
  const [posts, setPosts] = useState<Post[]>([]);



  async function load() {
    const data = await getPosts();
    setPosts(data);
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", load);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonNew}
        onPress={() => navigation.navigate("Composer")}
      >
        <Text style={styles.buttonText}>+ Novo Post</Text>
      </TouchableOpacity>

      <FlatList
        data={posts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.postText}>{item.text}</Text>
            <Text style={styles.date}>{new Date(item.createdAt).toLocaleTimeString()}</Text>
          </View>
        )}
      />
    </View>
  );
}
