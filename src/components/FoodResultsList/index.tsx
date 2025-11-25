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
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => onSelectItem(item)}
        >
          {item.imageUrl && (
            <Image
              source={{ uri: item.imageUrl }}
              style={{
                height: 40,
                width: 40,
                backgroundColor: "lightgray",
                marginRight: 10,
                borderRadius: 4,
              }}
            />
          )}

          <View>
            <Text>{item.name}</Text>
            <Text>
              <Text>{Math.round(item.calories)} kcal</Text>
              {" | "}
              Prot: {Math.round(item.proteins)}g{" | "}
              Carbo: {Math.round(item.carbohydrates)}g
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
