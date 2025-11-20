import { LinearGradient } from "expo-linear-gradient"
import { Text, View } from "react-native"
import { CardRegister } from "../../components/CardRegister"
import { styles } from "./style"

export const Register = () => {
    return (
        <View style={styles.container}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#F0FFF0", "#8BC34A"]}
                style={styles.background}
              >
              <View style={styles.contentContainer}>
                <CardRegister />
              </View>
        
                
             
              </LinearGradient>
            </View>
    )
}