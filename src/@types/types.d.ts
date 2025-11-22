type FoodItem = {
  id: string;
  name: string;
  calories: number;
};

type RefeicoesHorario = 'cafe' | 'almoco' | 'tarde' | 'jantar' | 'ceia';

type RefeicoesItem = {
  horario: RefeicoesHorario;
  alimento: FoodItem;
  quantidade?: number;
};

type OpenFoodFactsResponse = {  
  _id?: string;
  product_name: string;
  nutriments: {
    "energy-kcal_100g"?: number;
  };
};

type AuthContextProps = {
  saveDiet: (diet: Record<RefeicoesHorario, RefeicoesItem[]>) => void;
};