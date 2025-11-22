import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { View } from "react-native";
import { useAuth } from "../../Auth/useAuth";
import { CardLogin } from "../../components/CardLogin";
import { FooterLogin } from "../../components/FooterLogin";
import { styles } from "./style";


export const Login = () => {
  
  const {getData, user} = useAuth();
  const navigation = useNavigation();

  useEffect(() => {getData()}, [])

  useEffect(() => {
    if(user) {
      navigation.navigate("StackHome")
    }
  }, [user, navigation])

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#F0FFF0", "#8BC34A"]}
        style={styles.background}
      >
      <View style={styles.contentContainer}>
        <CardLogin />
      </View>

        
      <FooterLogin />
      </LinearGradient>
    </View>
  );
};
