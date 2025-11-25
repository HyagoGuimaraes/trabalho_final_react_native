import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './style';

interface Props {
  query: string;
  setQuery: (value: string) => void;
  onSearch: () => void;
}

export const FoodSearchInput = ({ query, setQuery, onSearch }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar alimento..."
        value={query}
        onChangeText={setQuery}
      />
      <TouchableOpacity style={styles.button} onPress={onSearch}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
};