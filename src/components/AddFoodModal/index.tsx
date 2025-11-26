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
  const [loading, setLoading] = useState(false);

  const searchFood = async () => {
    if (!query.trim()) return;
    setLoading(true);
    const foods = await searchFoodApi(query);
    setResults(foods);
    setLoading(false);
  };

  return (
    <View style={styles.modalBackground}>
      <View style={styles.modalContent}>

        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>

        <Text style={styles.modalTitle}>Adicionar alimento</Text>

        <FoodSearchInput query={query} setQuery={setQuery} onSearch={searchFood} />

        <View style={styles.resultsContainer}>
          {loading ? (
            <Text>Buscando...</Text>
          ) : (
            <FoodResultsList results={results} onSelectItem={onSelectFood} />
          )}
        </View>

        <TouchableOpacity style={styles.modalClose} onPress={onClose}>
          <Text>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
