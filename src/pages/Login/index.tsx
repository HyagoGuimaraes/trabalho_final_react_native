import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { CardLogin } from "../../components/CardLogin";
import { styles } from "./style";
import { LinearGradient } from "expo-linear-gradient";
import { FooterLogin } from "../../components/FooterLogin";
import { useAuth } from "../../Auth/useAuth";
import { useEffect } from "react";


export const Login = () => {
  
  const {getData} = useAuth();

  useEffect(() => {getData()}, [])

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
