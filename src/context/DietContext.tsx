import { createContext, useEffect, useState } from "react";
import { Api } from "../service/api";
import { useAuth } from "../auth/useAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface DietContextProps {
  diet: DietType | undefined;
  saveDiet: (
    newDiet: Record<RefeicoesHorario, RefeicoesItem[]>,
    totais: { calories: number; proteins: number; carbohydrates: number }
  ) => Promise<void>;
  removeFood: (horario: RefeicoesHorario, index: number) => void;
}

export const DietContext = createContext<DietContextProps>({
  diet: undefined,
  saveDiet: async () => {},
  removeFood: () => {},
});

export const DietProvider = ({ children }: any) => {
  const { user } = useAuth();

  const [diet, setDiet] = useState<DietType | undefined>(undefined);

  useEffect(() => {
    (async () => {
      try {
        const storedDiet = await AsyncStorage.getItem("diet");
        if (storedDiet) {
          setDiet(JSON.parse(storedDiet));
          console.log("Dieta carregada do armazenamento");
        }
      } catch (error) {
        console.error("Erro ao carregar dieta", error);
      }
    })();
  }, []);

  const saveDiet = async (
    newDiet: Record<RefeicoesHorario, RefeicoesItem[]>,
    totais: { calories: number; proteins: number; carbohydrates: number }
  ) => {
    if (!user) return;

    try {
      // Cria o objeto completo
      const dietToSave: DietType = {
        refeicoes: newDiet,
        totais,
      };

      // // Salva na API
      // await Api.put(`/users/${user.id}`, { diet: dietToSave });
      // console.log("Dieta salva no usuário");

      // Salva localmente
      await AsyncStorage.setItem("diet", JSON.stringify(dietToSave));
      console.log("Dieta salva no AsyncStorage");

      setDiet(dietToSave);
    } catch (err) {
      console.error("Erro ao salvar dieta", err);
    }
  };

  const removeFood = (horario: RefeicoesHorario, index: number) => {
    if (!diet) return;

    const updated = {
      ...diet,
      refeicoes: {
        ...diet.refeicoes,
        [horario]: diet.refeicoes[horario].filter((_, i) => i !== index),
      },
    };

    setDiet(updated);
    AsyncStorage.setItem("diet", JSON.stringify(updated));
  };

  return (
    <DietContext.Provider value={{ diet, saveDiet, removeFood }}>
      {children}
    </DietContext.Provider>
  );
};
