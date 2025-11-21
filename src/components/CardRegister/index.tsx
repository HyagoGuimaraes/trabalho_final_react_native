import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { ButtonLogin } from "../Button/Login";
import { ButtonForgot } from "../Button/Forgot";


export const CardRegister = () => {
  const navigation = useNavigation();

  

  const cadastrar = () => {
    navigation.navigate("StackLogin");
  };

  return (
    <View style={styles.card}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor={"black"}
          placeholder="Nome"
          style={styles.input}
        />
        <TextInput
          placeholderTextColor={"black"}
          placeholder="Sobrenome"
          style={styles.input}
        />

        <TextInput
          keyboardType="email-address"
          placeholderTextColor={"black"}
          placeholder="E-mail"
          style={styles.input}
        />
        <TextInput
          keyboardType="email-address"
          placeholderTextColor={"black"}
          placeholder="Confirma E-mail"
          style={styles.input}
        />

        <TextInput
          secureTextEntry={true}
          placeholderTextColor={"black"}
          placeholder="Senha"
          style={styles.input}
        />
        <TextInput
          secureTextEntry={true}
          placeholderTextColor={"black"}
          placeholder="Confirma senha"
          style={styles.input}
        />
      </View>

      <View style={styles.button}>
        <ButtonLogin titulo='Cadastrar' onPressAction={cadastrar}/>
      </View>
        
      
    </View>
  );
};
