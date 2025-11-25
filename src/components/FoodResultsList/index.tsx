import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"; 
import { styles } from "./style";

interface PropsFood {
  results: FoodItem[];
  onSelectItem: (item: FoodItem) => void;
}

export const FoodResultsList = ({ results, onSelectItem }: PropsFood) => {
  return (
    <FlatList
      data={results}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 10 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => onSelectItem(item)}
        >
          {item.imageUrl ? (
            <Image source={{ uri: item.imageUrl }} style={styles.foodImage} />
          ) : (
            <View style={styles.placeholderImage}>
              <Text style={styles.textImage}>Sem imagem</Text>
            </View>
          )}

          <View style={styles.infoContainer}>
            <Text style={styles.foodName} numberOfLines={1}>
              {item.name}
            </Text>

            <Text style={styles.details}>
              {Math.round(item.calories)} kcal | 
              <Text style={styles.protein}> Prot: {Math.round(item.proteins)}g</Text> |
              <Text style={styles.carbo}> Carbo: {Math.round(item.carbohydrates)}g</Text>
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};