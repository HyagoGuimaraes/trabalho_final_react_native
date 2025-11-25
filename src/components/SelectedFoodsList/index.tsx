import { Text, View } from "react-native";
import { styles } from './style';

interface Props {
    refeicaoState: Record<RefeicoesHorario, RefeicoesItem[]>;
    selectedRefeicao: RefeicoesHorario;
}

export const SelectedFoodsList = ({ refeicaoState, selectedRefeicao }: Props) => {
    const foods = refeicaoState[selectedRefeicao];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecionados ({foods.length})</Text>
            {foods.map((item, idx) => (
                <Text key={idx} style={styles.item}>
                    {item.alimento.name} ({item.alimento.calories} kcal)
                </Text>
            ))}
        </View>
    );
};