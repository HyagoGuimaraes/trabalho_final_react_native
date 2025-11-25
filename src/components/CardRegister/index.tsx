import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, TextInput, View } from "react-native";
import { RegisterUser } from "../../service/RegisterUser";
import { ButtonLogin } from "../Button/Login";
import { styles } from "./style";



export const CardRegister = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const cadastrar = async () => {
    if (!name || !surname || !email || !password) {
      Alert.alert("Preencha todos os campos!");
      return;
    }

    if (email !== confirmEmail) {
      Alert.alert("Os emails não coincidem!");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("As senhas não coincidem!");
      return;
    }

    try {

      const data = {name: `${name} ${surname}`, email, password}

      const response = await RegisterUser(data)

      Alert.alert("Usuário cadastrado com sucesso!");

      navigation.navigate("StackLogin");

      return response?.data;
    } catch (error) {
      Alert.alert("Erro ao cadastrar usuário");
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor={"black"}
          placeholder="Nome"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholderTextColor={"black"}
          placeholder="Sobrenome"
          style={styles.input}
          value={surname}
          onChangeText={setSurname}
        />

        <TextInput
          keyboardType="email-address"
          placeholderTextColor={"black"}
          placeholder="E-mail"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          keyboardType="email-address"
          placeholderTextColor={"black"}
          placeholder="Confirma E-mail"
          style={styles.input}
          value={confirmEmail}
          onChangeText={setConfirmEmail}
        />

        <TextInput
          secureTextEntry={true}
          placeholderTextColor={"black"}
          placeholder="Senha"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          secureTextEntry={true}
          placeholderTextColor={"black"}
          placeholder="Confirma senha"
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <View style={styles.button}>
        <ButtonLogin titulo="Cadastrar" onPressAction={cadastrar} disabled={!email.includes('@') && !confirmEmail.includes('@')} />
      </View>
    </View>
  );
};
