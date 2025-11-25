import { createContext, useState } from "react";

export const AuthContext = createContext<AuthContextProps>({
  saveDiet: () => { },
});

export const AuthProvider = ({ children }: any) => {
  const [diet, setDiet] = useState<Record<RefeicoesHorario, RefeicoesItem[]>>({
    cafe: [],
    almoco: [],
    tarde: [],
    jantar: [],
    ceia: [],
  });

  const saveDiet = (newDiet: Record<RefeicoesHorario, RefeicoesItem[]>) => {
    console.log('Dieta salva: ', newDiet);
    setDiet(newDiet);
  };

  return (
    <AuthContext.Provider value={{ saveDiet }}>
      {children}
    </AuthContext.Provider>
  );
};