import React  from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from './style';

interface Props {
    refeicoes: { key: RefeicoesHorario; label: string }[];
    selected: RefeicoesHorario;
    onSelect: (val: RefeicoesHorario) => void;
}

export const RefeicaoSelector = ({ refeicoes, selected, onSelect }: Props) => {
    return (
        <View style={styles.container}>
            {refeicoes.map((r) => (
                <TouchableOpacity key={r.key} style={[styles.button, selected === r.key && styles.selected]} onPress={() => onSelect(r.key)}>
                    <Text style={styles.text}>{r.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};