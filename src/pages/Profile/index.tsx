import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../auth/useAuth";
import image from '../../assets/image.png'
import { styles } from "./style";
import { DadosUser } from "../../components/DadosUser";
import { useNavigation } from "@react-navigation/native";


export default function Profile() {
  const { user, logOut } = useAuth();
   const navigation = useNavigation();
  console.log(user)

  const sair = async () => {
    try {
      await logOut()
      navigation.reset({index:0, routes:[{name: 'StackLogin'}]}) 
    } catch (error) {
      Alert.alert("Erro inesperado!")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image}/>
        <Text style={styles.text}>{user?.name}</Text>
      </View>

      <View style={styles.dadosContainer}>
        <View style={styles.tituloContainer}>
          <Text style={styles.titulo}>Dados do Usuario</Text>
        </View>
        <View style={styles.dados}>
          <DadosUser titulo="Email de Contato" dado={user?.email} />
          <DadosUser titulo="Peso" dado={user?.weight} sufix="Kg" />
          <DadosUser titulo="Altura" dado={user?.height} sufix="Cm"/>
        </View>
      </View>
      <TouchableOpacity onPress={sair} style={styles.button}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
