import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../auth/useAuth";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import { Api } from "../../service/api";
import { styles } from "./style";
import { DadosUser } from "../../components/dadosUser";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const { user, setUser, logOut } = useAuth();
  const navigation = useNavigation();

  const pickImage = async () => {
    if (!user) {
      Alert.alert("Usuário não encontrado!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
    });

    if (!result.canceled) {
      try {
        const uri = result.assets[0].uri;

        const manipulated = await ImageManipulator.manipulateAsync(
          uri,
          [{ resize: { width: 600 } }],
          {
            compress: 0.5,
            format: ImageManipulator.SaveFormat.JPEG,
            base64: true,
          }
        );

        const base64Img = "data:image/jpeg;base64," + manipulated.base64;

        await Api.put(`/users/${user.id}`, {
          ...user,
          image: base64Img,
        });

        setUser({ ...user, image: base64Img });

        Alert.alert("Foto atualizada!");
      } catch (error) {
        console.log(error);
        Alert.alert("Erro ao atualizar imagem");
      }
    }
  };

  const sair = async () => {
    try {
      await logOut();
      navigation.reset({ index: 0, routes: [{ name: "StackLogin" }] });
    } catch (error) {
      Alert.alert("Erro inesperado!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>

        <TouchableOpacity onPress={pickImage}>
          <Image
            source={{
              uri: user?.image
                ? user.image
                : "https://via.placeholder.com/150.png?text=Foto",
            }}
            style={styles.image}
          />
        </TouchableOpacity>

        <Text style={styles.text}>{user?.name}</Text>
      </View>

      <View style={styles.dadosContainer}>
        <View style={styles.tituloContainer}>
          <Text style={styles.titulo}>Dados do Usuário</Text>
        </View>

        <View style={styles.dados}>
          <DadosUser titulo="Email de Contato" dado={user?.email} />
          <DadosUser titulo="Peso" dado={user?.weight} sufix="Kg" />
          <DadosUser titulo="Altura" dado={user?.height} sufix="Cm" />
        </View>
      </View>

      <TouchableOpacity onPress={sair} style={styles.button}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}


