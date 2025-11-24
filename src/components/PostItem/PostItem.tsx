import { View, Text } from "react-native";
import { Post } from "../../service/PostsLocal";

export default function PostItem({ post }: { post: Post }) {
  return (
    <View style={{ padding: 12, borderBottomWidth: 1 }}>
      <Text>{post.content}</Text>
      <Text style={{ opacity: 0.5, marginTop: 6 }}>
        {new Date(post.createdAt).toLocaleString()}
      </Text>
    </View>
  );
}
