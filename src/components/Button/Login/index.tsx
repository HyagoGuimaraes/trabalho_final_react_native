import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

export const ButtonLogin = () => {
  const navigation = useNavigation();

  const login = () => {
    navigation.navigate("StackHome");
  };

  return (
    <TouchableOpacity onPress={login} style={styles.button}>
      <Text style={styles.text}>Entrar</Text>
    </TouchableOpacity>
  );
};
