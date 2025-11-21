import { Image, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import CardContar from "../../components/CardContar"
import {styles} from "./style"
import { LinearGradient } from "expo-linear-gradient"

export const Home = () => {
    return (
        <SafeAreaView>
            <LinearGradient
                colors={['#04dd04ff', '#047204']}
                style={styles.titulo}
            >
                <View>
                    <Text style={styles.h1}>Bem vindo! Usuario</Text>
                    <Text style={styles.h2}>Teresopolis-rj</Text>
                </View>
            </LinearGradient>
            <View>
                <Image />
                <CardContar
                    caloriesTotal={1291}
                    caloriesRemaining={826}
                    caloriesBurned={244}
                    carbs={205}
                    protein={32}
                    fat={32}
                />

            </View>
        </SafeAreaView>
    )
}
