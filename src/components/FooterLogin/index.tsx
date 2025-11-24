import React  from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

export const FooterLogin = () => {
  const navigation = useNavigation();

  const Register = () => {
    navigation.navigate("StackRegister");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Não tem conta?</Text>
      <TouchableOpacity onPress={Register}>
        <Text style={styles.buttonText}>Registre-se</Text>
      </TouchableOpacity>
    </View>
  );
};
