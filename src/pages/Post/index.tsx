import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { createPost } from "../../service/PostService";
import { styles } from "./style";
import { getUserStorage } from "../../service/storage";

export default function Post() {
  const [image, setImage] = useState<string | null>(null);
  const [description, setDescription] = useState("");

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });

    if (!result.canceled) {
      const base64 = `data:image/jpeg;base64,${result.assets[0].base64}`;
      setImage(base64);
    }
  };

  const handlePost = async () => {
    if (!image) {
      Alert.alert("Selecione uma imagem");
      return;
    }

    const user = await getUserStorage();

    if (!user) {
      Alert.alert("Erro: usuário não encontrado");
      return;
    }

    const newPost = {
      userId: user.id,
      username: user.name,
      description,
      image,
      createdAt: new Date().toISOString(),
    };

    const saved = await createPost(newPost);

    if (saved) {
      Alert.alert("Post criado com sucesso!");
      setImage(null);
      setDescription("");
    }
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
        <Text style={styles.imageButtonText}>Escolher imagem</Text>
      </TouchableOpacity>

      {image && <Image source={{ uri: image }} style={styles.preview} />}

      <TextInput
        style={styles.input}
        placeholder="Escreva uma legenda..."
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TouchableOpacity style={styles.postButton} onPress={handlePost}>
        <Text style={styles.postButtonText}>Publicar</Text>
      </TouchableOpacity>
    </View>
  );
}

