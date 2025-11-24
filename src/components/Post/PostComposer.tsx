import { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { addPost } from "../../service/PostsLocal";

export default function PostComposer({ onPosted }: { onPosted: () => void }) {
  const [text, setText] = useState("");

  async function handleSend() {
    if (!text.trim()) return;

    await addPost(text);
    setText("");
    onPosted();
  }

  return (
    <View style={{ padding: 12 }}>
      <TextInput
        placeholder="O que você quer postar?"
        value={text}
        onChangeText={setText}
        style={{
          padding: 10,
          borderWidth: 1,
          borderRadius: 6,
        }}
      />

      <Button title="Publicar" onPress={handleSend} />
    </View>
  );
}
