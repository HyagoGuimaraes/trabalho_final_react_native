import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native"

export const Login = () => {
    const navigation = useNavigation();

  const login = () => {
    navigation.navigate("StackHome");
  }

  const cadastrar = () => {
    navigation.navigate("StackRegister")
  }
    return  (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>ola</Text>
            <TouchableOpacity onPress={login}>
                <Text>Logar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={cadastrar}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}