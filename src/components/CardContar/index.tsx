import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

type Props = {
  caloriesTotal: number;
  caloriesRemaining: number;
  caloriesBurned: number;
  carbs: number;
  protein: number;
  fat: number;
};

export default function CardContar({
  caloriesTotal,
  caloriesRemaining,
  caloriesBurned,
  carbs,
  protein,
  fat,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today</Text>

      <View style={styles.row}>
        <View>
          <Text style={styles.big}>{caloriesRemaining}</Text>
          <Text style={styles.label}>Restante</Text>
        </View>

        <View>
          <Text style={styles.medium}>{caloriesTotal}</Text>
          <Text style={styles.label}>Comido</Text>
        </View>

        <View>
          <Text style={styles.medium}>{caloriesBurned}</Text>
          <Text style={styles.label}>Calorias queimadas</Text>
        </View>
      </View>

      <View style={styles.macros}>
        <Text style={styles.macroText}>Carbs: {carbs}g</Text>
        <Text style={styles.macroText}>Protein: {protein}g</Text>
        <Text style={styles.macroText}>Fat: {fat}g</Text>
      </View>
    </View>
  );
}
