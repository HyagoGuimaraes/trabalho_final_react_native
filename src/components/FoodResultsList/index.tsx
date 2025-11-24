import React  from 'react';
import { FlatList, Text, TouchableOpacity } from "react-native";
import { styles } from './style';

interface Props {
    results: FoodItem[];
    onSelectItem: (item: FoodItem) => void;
}
export const FoodResultsList = ({ results, onSelectItem }: Props) => {
    return (
        <FlatList
            data={results}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.item} onPress={() => onSelectItem(item)}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.calories}>{item.calories} kcal</Text>
                </TouchableOpacity>
            )}
        />
    );
};