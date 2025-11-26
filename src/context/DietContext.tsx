import { createContext, useEffect, useState } from "react";
import { Api } from "../service/api";
import { useAuth } from "../Auth/useAuth";

interface DietContextProps {
  diet: Record<RefeicoesHorario, RefeicoesItem[]>;
  saveDiet: (
    newDiet: Record<RefeicoesHorario, RefeicoesItem[]>
  ) => Promise<void>;
  removeFood: (horario: RefeicoesHorario, index: number) => void;
}

export const DietContext = createContext<DietContextProps>({
  diet: { cafe: [], almoco: [], tarde: [], jantar: [], ceia: [] },
  saveDiet: async () => {},
  removeFood: () => {},
});

export const DietProvider = ({ children }: any) => {
  const {  user } = useAuth();

  const [diet, setDiet] = useState<Record<RefeicoesHorario, RefeicoesItem[]>>({
    cafe: [],
    almoco: [],
    tarde: [],
    jantar: [],
    ceia: [],
  });
  useEffect(() => {
    if (user?.diet) {
      setDiet(user.diet as Record<RefeicoesHorario, RefeicoesItem[]>);
      console.log("Dieta carregada do usuário:", user.diet);
    }
  }, [user]);

  const saveDiet = async (
    newDiet: Record<RefeicoesHorario, RefeicoesItem[]>
  ) => {
    if (!user) return;
    console.log("passou");
    try {
      await Api.put(`/users/${user.id}`, { diet: newDiet });
      console.log("Dieta salva no usuário");
      setDiet(newDiet);
    } catch (err) {
      console.error("Erro ao salvar dieta", err);
    }
  };

  const removeFood = (horario: RefeicoesHorario, index: number) => {
    setDiet((prev) => ({
      ...prev,
      [horario]: prev[horario].filter((_, i) => i !== index),
    }));
  };

  return (
    <DietContext.Provider value={{ diet, saveDiet, removeFood }}>
      {children}
    </DietContext.Provider>
  );
};
