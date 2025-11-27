import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { createPost } from "../../service/PostService";
import { styles } from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../auth/useAuth";
import { ImageManipulator } from "expo-image-manipulator";
import DismissKeyboard from "../../components/Keyboard/DismissKeyboard";

export default function Post() {
  const [image, setImage] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const { user } = useAuth();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.canceled) {
      const asset = result.assets[0];

      const manipulatedImage = await ImageManipulator.manipulateAsync(
        asset.uri,
        [{ resize: { width: 600 } }],
        {
          compress: 0.6,
          format: ImageManipulator.SaveFormat.JPEG,
          base64: true,
        }
      );

      if (manipulatedImage.base64) {
        const base64 = `data:image/jpeg;base64,${manipulatedImage.base64}`;
        setImage(base64);
      }
    }
  };

  const handlePost = async () => {
    if (!image) {
      Alert.alert("Selecione uma imagem");
      return;
    }

    if (!user) {
      Alert.alert("Erro: usuário não encontrado");
      return;
    }

    const newPost = {
      userId: user.id,
      username: user.name,
      image,
      description,
    };

    const saved = await createPost(newPost);

    if (saved) {
      Alert.alert("Post criado com sucesso!");
      setImage(null);
      setDescription("");
    }
  };

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.safeArea}>
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
      </SafeAreaView>
    </DismissKeyboard>
  );
}
