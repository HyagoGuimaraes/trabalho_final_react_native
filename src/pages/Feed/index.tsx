import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { getPosts, Post } from "../../service/PostsLocal";
import PostComposer from "../../components/Post/PostComposer";
import PostItem from "../../components/PostItem/PostItem";

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);

  async function load() {
    const data = await getPosts();
    setPosts(data);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <PostComposer onPosted={load} />

      <FlatList
        data={posts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <PostItem post={item} />}
      />
    </View>
  );
}
