import { Text, View } from "react-native"
import { styles } from "./style"

interface PropsDados {
    titulo: string,
    dado: undefined | string,
    sufix: string
}
export const DadosUser = ({titulo, dado, sufix}: PropsDados) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo} </Text>
            <Text style={styles.dado}>{dado} {sufix}</Text>
        </View>
    )
}