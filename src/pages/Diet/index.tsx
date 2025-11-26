import React, { useContext, useState } from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DietContext } from "../../context/DietContext";
import { styles } from "./style";
import { RefeicaoItem } from "../../components/RefeicaoItem";
import { AddFoodModal } from "../../components/AddFoodModal";

const REFEICOES = [
  { key: "cafe", label: "Café da manhã" },
  { key: "almoco", label: "Almoço" },
  { key: "tarde", label: "Café da tarde" },
  { key: "jantar", label: "Jantar" },
  { key: "ceia", label: "Ceia" },
] as const;

export const DietPage = () => {
  const { diet, saveDiet } = useContext(DietContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRefeicao, setSelectedRefeicao] = useState<RefeicoesHorario>("cafe");

  const [refeicaoState, setRefeicaoState] = useState<Record<RefeicoesHorario, RefeicoesItem[]>>({
    cafe: [],
    almoco: [],
    tarde: [],
    jantar: [],
    ceia: [],
  });

  React.useEffect(() => {
    if (diet?.refeicoes) {
      setRefeicaoState(diet.refeicoes);
      console.log("Dieta carregada na tela:", diet.refeicoes);
    }
  }, [diet]);

  const handleAddFood = (item: FoodItem, quantidade: number) => {
    const novoItem: RefeicoesItem = {
      horario: selectedRefeicao,
      quantidade,
      alimentoOriginal: item,
      alimento: {
        ...item,
        calories: (item.calories / 100) * quantidade,
        proteins: (item.proteins / 100) * quantidade,
        carbohydrates: (item.carbohydrates / 100) * quantidade,
      },
    };

    setRefeicaoState(prev => ({
      ...prev,
      [selectedRefeicao]: [...prev[selectedRefeicao], novoItem],
    }));

    setModalVisible(false);
  };

  const handleUpdateFood = (horario: RefeicoesHorario, index: number, updated: RefeicoesItem) => {
    setRefeicaoState(prev => ({
      ...prev,
      [horario]: prev[horario].map((item, i) => (i === index ? updated : item)),
    }));
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

        {REFEICOES.map(r => (
          <RefeicaoItem
            key={r.key}
            refeicao={r}
            items={refeicaoState[r.key]}
            onAddFood={() => {
              setSelectedRefeicao(r.key);
              setModalVisible(true);
            }}
            onRemoveFood={handleRemoveFood}
            onUpdateFood={handleUpdateFood}
          />
        ))}

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const totais = Object.values(refeicaoState).flat().reduce(
              (acc, item) => ({
                calories: acc.calories + item.alimento.calories * (item.quantidade || 1),
                proteins: acc.proteins + item.alimento.proteins * (item.quantidade || 1),
                carbohydrates: acc.carbohydrates + item.alimento.carbohydrates * (item.quantidade || 1),
              }),
              { calories: 0, proteins: 0, carbohydrates: 0 }
            );

            saveDiet(refeicaoState, totais);
          }}
        >
          <Text style={styles.buttonText}>Salvar Dieta</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal visible={modalVisible} transparent animationType="slide">
        <AddFoodModal
          onClose={() => setModalVisible(false)}
          onSelectFood={handleAddFood}
        />
      </Modal>
    </SafeAreaView>
  );
};