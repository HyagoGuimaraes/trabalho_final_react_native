import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { addPost } from "../../service/PostsLocal";
import { styles } from "./composerStyle";

export default function Composer({ navigation } : {navigation: any}) {
  const [text, setText] = useState("");

  async function handleSend() {
    if (!text.trim()) return;

    await addPost(text);
    setText("");
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="O que você está pensando?"
        value={text}
        onChangeText={setText}
        style={styles.input}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Publicar</Text>
      </TouchableOpacity>
    </View>
  );
}
