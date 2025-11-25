import { useContext, useState } from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DietContext } from "../../context/DietContext";
import { styles } from "./style";
import { RefeicaoItem } from "../../components/RefeicaoItem";
import { AddFoodModal } from "../../components/AddFoodModal";

const REFEICOES: { key: RefeicoesHorario; label: string }[] = [
  { key: 'cafe', label: 'Café da manhã' },
  { key: 'almoco', label: 'Almoço' },
  { key: 'tarde', label: 'Café da tarde' },
  { key: 'jantar', label: 'Jantar' },
  { key: 'ceia', label: 'Ceia' },
];

export const DietPage = () => {

  const { saveDiet } = useContext(DietContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRefeicao, setSelectedRefeicao] = useState<RefeicoesHorario>('cafe');
  const [refeicaoState, setRefeicaoState] = useState<Record<RefeicoesHorario, RefeicoesItem[]>>({
    cafe: [],
    almoco: [],
    tarde: [],
    jantar: [],
    ceia: [],
  });

  const handleAddFood = (item: FoodItem) => {
    const novoItem: RefeicoesItem = {
      horario: selectedRefeicao,
      alimento: item,
      quantidade: 1,
    };

    setRefeicaoState(prev => ({
      ...prev,
      [selectedRefeicao]: [...prev[selectedRefeicao], novoItem],
    }));

    setModalVisible(false);
  };

  const handleRemoveFood = (horario: RefeicoesHorario, index: number) => {
    setRefeicaoState(prev => ({
      ...prev,
      [horario]: prev[horario].filter((_, i) => i !== index),
    }));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Montar Dieta</Text>

        {REFEICOES.map((r) => (
          <RefeicaoItem
            key={r.key}
            refeicao={r}
            items={refeicaoState[r.key]}
            onAddFood={() => {
              setSelectedRefeicao(r.key);
              setModalVisible(true);
            }}
            onRemoveFood={handleRemoveFood}
          />
        ))}

        <TouchableOpacity style={styles.button} onPress={() => saveDiet(refeicaoState)}>
          <Text style={styles.buttonText}>Salvar Dieta</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <AddFoodModal
          onClose={() => setModalVisible(false)}
          onSelectFood={handleAddFood}
        />
      </Modal>
    </SafeAreaView>
  );
};