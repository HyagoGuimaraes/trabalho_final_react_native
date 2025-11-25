import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";

interface PropsSelected {
  refeicaoState: Record<RefeicoesHorario, RefeicoesItem[]>;
  selectedRefeicao: RefeicoesHorario;
}

export const SelectedFoodsList = ({refeicaoState, selectedRefeicao,}: PropsSelected) => {
  const foods = refeicaoState[selectedRefeicao];

  const totals = foods.reduce(
    (sum: NutrimentDetails, item: RefeicoesItem) => {
      
      sum.calories += item.alimento.calories ;
      sum.proteins += item.alimento.proteins ;
      sum.carbohydrates += item.alimento.carbohydrates ;
      return sum;
    },
    { calories: 0, proteins: 0, carbohydrates: 0 }
  );

  return (
    <View style={styles.container}>
      {foods.map((item: RefeicoesItem, idx: number) => (
        <Text key={idx} style={styles.item}>
          {item.alimento.name} ({Math.round(item.alimento.calories)} kcal/100g)
          <Text>
            {" "}
            — Prot: {Math.round(item.alimento.proteins)}g | Carbo:{" "}
            {Math.round(item.alimento.carbohydrates)}g
          </Text>
        </Text>
      ))}
      <Text style={styles.title}>
        Selecionados ({foods.length})
        <Text> — Total: {Math.round(totals.calories)} kcal</Text>
      </Text>

      <Text style={styles.title}>
        Prot: {Math.round(totals.proteins)}g | Carbo:{" "}
        {Math.round(totals.carbohydrates)}g
      </Text>
    </View>
  );
};
