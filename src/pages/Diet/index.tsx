import React, { useContext, useEffect, useState } from "react";
import { Modal, FlatList, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DietContext } from "../../context/DietContext";
import { styles } from "./style";
import { RefeicaoItem } from "../../components/RefeicaoItem";
import { AddFoodModal } from "../../components/AddFoodModal";
import DismissKeyboard from "../../components/Keyboard/DismissKeyboard";

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

  useEffect(() => {
    if (diet?.refeicoes) {
      setRefeicaoState(diet.refeicoes);
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

  const renderRefeicao = ({ item }: { item: typeof REFEICOES[number] }) => (
    <RefeicaoItem
      refeicao={item}
      items={refeicaoState[item.key]}
      onAddFood={() => {
        setSelectedRefeicao(item.key);
        setModalVisible(true);
      }}
      onRemoveFood={handleRemoveFood}
      onUpdateFood={handleUpdateFood}
    />
  );

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>Montar Dieta</Text>

        <FlatList
          data={REFEICOES}
          keyExtractor={(item) => item.key}
          renderItem={renderRefeicao}
          contentContainerStyle={{ paddingBottom: 20 }}
          keyboardShouldPersistTaps='always'
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const totais = Object.values(refeicaoState).flat().reduce(
              (acc, item) => ({
                calories: acc.calories + item.alimento.calories,
                proteins: acc.proteins + item.alimento.proteins,
                carbohydrates: acc.carbohydrates + item.alimento.carbohydrates,
              }),
              { calories: 0, proteins: 0, carbohydrates: 0 }
            );

            saveDiet(refeicaoState, totais);
          }}
        >
          <Text style={styles.buttonText}>Salvar Dieta</Text>
        </TouchableOpacity>

        <Modal visible={modalVisible} transparent animationType="slide">
          <AddFoodModal
            onClose={() => setModalVisible(false)}
            onSelectFood={handleAddFood}
          />
        </Modal>
      </SafeAreaView>
    </DismissKeyboard>
  );
};
