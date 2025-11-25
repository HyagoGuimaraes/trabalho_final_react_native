import { useState } from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from './style';

interface Props {
  refeicao: { key: RefeicoesHorario; label: string };
  items: RefeicoesItem[];
  onAddFood: () => void;
}

export const RefeicaoItem = ({ refeicao, items, onAddFood }: Props) => {
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
            items.map((item, index) => (
              <Text key={index} style={styles.itemText}>
                {item.alimento.name} ({item.alimento.calories} kcal)
              </Text>
            ))
          )}
        </View>
      )}
      
    </View>
  );
};