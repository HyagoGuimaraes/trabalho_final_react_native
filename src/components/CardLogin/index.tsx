import { useNavigation } from "@react-navigation/native";
import { Alert, TextInput, View } from "react-native";
import { useAuth } from "../../auth/useAuth";
import { ButtonForgot } from "../Button/Forgot";
import { ButtonLogin } from "../Button/Login";
import { styles } from "./style";

export const CardLogin = () => {
  const navigation = useNavigation();

  const { email, password, setEmail, setPassword, login } = useAuth();

  const checkLogin = async () => {

    if (!email || !password) {
      Alert.alert("Por favor, preencha todos os campos.")
      return
    }

    const response = await login(email, password);
    if (response) {
      Alert.alert("Bem Vindo!")
      setTimeout(() => { navigation.navigate('StackHome') }, 2000)
    }

  };

  return (
    <View style={styles.card}>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="email-address"
          placeholderTextColor={"black"}
          placeholder="E-mail"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          secureTextEntry={true}
          placeholderTextColor={"black"}
          placeholder="Senha"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.button}>
        <ButtonLogin titulo="Entrar" onPressAction={checkLogin} />
      </View>

      <View style={styles.button}>
        <ButtonForgot />
      </View>
    </View>
  );
};
