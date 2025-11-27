import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { View } from "react-native";
import { useAuth } from "../../auth/useAuth";
import { CardLogin } from "../../components/CardLogin";
import { FooterLogin } from "../../components/FooterLogin";
import { styles } from "./style";
import DismissKeyboard from "../../components/Keyboard/DismissKeyboard";

export const Login = () => {
  
  const {getData, user} = useAuth();

  useEffect(() => {getData()}, [])

 

  return (
    <DismissKeyboard>
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
    </DismissKeyboard>
  );
};
