import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { FoodResultsList } from "../FoodResultsList";
import { FoodSearchInput } from "../FoodSearchInput";
import { searchFoodApi } from "../../service/api";
import { styles } from "./style";

interface Props {
  onClose: () => void;
  onSelectFood: (item: FoodItem, quantidade: number) => void;
}

export const AddFoodModal = ({ onClose, onSelectFood }: Props) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState("100");

  const handleSelectFood = (item: FoodItem) => {
    onSelectFood(item, Number(quantity));
  };

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

        <TextInput
          style={styles.inputQt}
          keyboardType="numeric"
          value={quantity}
          onChangeText={setQuantity}
          placeholder="Quantidade (g)"
        />

        <View style={styles.resultsContainer}>
          {loading ? <Text>Buscando...</Text> : <FoodResultsList results={results} onSelectItem={handleSelectFood} />}
        </View>

        <TouchableOpacity style={styles.modalClose} onPress={onClose}>
          <Text>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
