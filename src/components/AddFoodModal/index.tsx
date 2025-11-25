import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FoodResultsList } from "../FoodResultsList";
import { FoodSearchInput } from "../FoodSearchInput";
import { searchFoodApi } from "../../service/api";
import { styles } from "./style";

interface Props {
  onClose: () => void;
  onSelectFood: (item: FoodItem) => void;
}

export const AddFoodModal = ({ onClose, onSelectFood }: Props) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<FoodItem[]>([]);

  const searchFood = async () => {
    const foods = await searchFoodApi(query);
    setResults(foods);
  };

  return (
    <View style={styles.modalBackground}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Adicionar alimento</Text>

        <FoodSearchInput query={query} setQuery={setQuery} onSearch={searchFood} />
        <FoodResultsList results={results} onSelectItem={onSelectFood} />

        <TouchableOpacity style={styles.modalClose} onPress={onClose}>
          <Text>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};