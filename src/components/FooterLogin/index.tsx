import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export const FooterLogin = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Não tem conta?  
      </Text>
      <TouchableOpacity >
        <Text style={styles.buttonText}>Registre-se</Text>
      </TouchableOpacity>
    </View>
  );
};
