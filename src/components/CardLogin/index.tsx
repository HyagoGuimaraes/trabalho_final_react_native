import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { ButtonLogin } from "../Button/Login";
import { ButtonForgot } from "../Button/Forgot";


export const CardLogin = () => {
  const navigation = useNavigation();

  

  const cadastrar = () => {
    navigation.navigate("StackRegister");
  };

  return (
    <View style={styles.card}>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="email-address"
          placeholderTextColor={"black"}
          placeholder="E-mail"
          style={styles.input}
        />

        <TextInput
          secureTextEntry={true}
          placeholderTextColor={"black"}
          placeholder="Senha"
          style={styles.input}
        />
      </View>

      <View style={styles.button}>
        <ButtonLogin/>
      </View>
        
      <View style={styles.button}>
        <ButtonForgot />
      </View>
    </View>
  );
};
