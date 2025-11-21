import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

export const ButtonForgot = () => {

  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Esqueceu a senha?</Text>
    </TouchableOpacity>
  );
};
