import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

interface Props {
  refeicao: { key: RefeicoesHorario; label: string };
  items: RefeicoesItem[];
  onAddFood: () => void;
  onRemoveFood: (horario: RefeicoesHorario, index: number) => void;
  onUpdateFood: (horario: RefeicoesHorario, index: number, updated: RefeicoesItem) => void;
}

export const RefeicaoItem = ({
  refeicao,
  items,
  onAddFood,
  onRemoveFood,
  onUpdateFood,
}: Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.section}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setExpanded(prev => !prev)}>
          <Text style={styles.refeicaoTitle}>{refeicao.label}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton} onPress={onAddFood}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {expanded && (
        <View style={styles.itemsBox}>
          {items.length === 0 ? (
            <Text style={styles.emptyText}>Nenhum alimento</Text>
          ) : (
            items.map((item, index) => {
              return (
                <View key={index} style={styles.itemRow}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.itemText}>
                      {item.alimento.name}
                    </Text>

                    <View style={styles.macroRow}>
                      <Text style={styles.macroItem}>
                        {Math.round(item.alimento.calories)} kcal
                      </Text>
                      <Text style={styles.macroItem}>
                        {item.alimento.proteins.toFixed(1)}g prot
                      </Text>
                      <Text style={styles.macroItem}>
                        {item.alimento.carbohydrates.toFixed(1)}g carb
                      </Text>
                    </View>
                  </View>

                  <TextInput
                    style={styles.qtInput}
                    keyboardType="numeric"
                    value={String(item.quantidade)}
                    onChangeText={(value) => {
                      const novaQt = Number(value) || 0;

                      const base = item.alimentoOriginal ?? item.alimento;

                      const updatedItem: RefeicoesItem = {
                        ...item,
                        quantidade: novaQt,
                        alimento: {
                          ...base,
                          calories: (base.calories / 100) * novaQt,
                          proteins: (base.proteins / 100) * novaQt,
                          carbohydrates: (base.carbohydrates / 100) * novaQt,
                        }
                      };

                      onUpdateFood(refeicao.key, index, updatedItem);
                    }}
                  />

                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => onRemoveFood(refeicao.key, index)}
                  >
                    <Text style={styles.removeText}>X</Text>
                  </TouchableOpacity>
                </View>
              );
            })
          )}
        </View>
      )}
    </View>
  );
};
