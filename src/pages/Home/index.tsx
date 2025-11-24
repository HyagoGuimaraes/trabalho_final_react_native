import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./style";

export default function Home() {
 
  const handleNewPost = () => {
    console.log("Criar nova publicação");
  };

  return (
    <LinearGradient
      colors={["#E6F7D9", "#A1D97B"]}
      style={styles.container}
    >
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>Bem-vindo(a) </Text>
          <Text style={styles.subtitle}>
            Aqui você acompanha dietas e feedbacks.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.newPostButton}
          activeOpacity={0.7}
          onPress={handleNewPost}
        >
          <Feather name="edit" size={20} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.newPostText}>Criar nova publicação</Text>
        </TouchableOpacity>

        <View style={styles.feedPlaceholder}>
          <Text style={styles.feedText}>
            As publicações aparecerão aqui...
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}