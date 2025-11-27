type FoodItem = {
  id: string;
  name: string;
  calories: number;
  imageUrl?: string
  proteins: number;
  carbohydrates: number;
};

type RefeicoesHorario = 'cafe' | 'almoco' | 'tarde' | 'jantar' | 'ceia';

type RefeicoesItem = {
  horario: RefeicoesHorario;
  alimento: FoodItem;
  quantidade?: number;
  alimentoOriginal?: FoodItem;
};

type NutrimentDetails = {
  "energy-kcal_100g"?: number;
  "proteins_100g"?: number;
  "carbohydrates_100g"?: number;
  [key: string]: any;
};

type OpenFoodFactsResponse = {
  _id?: string;
  product_name: string;
  nutriments: NutrimentDetails;
  image_url?: string
};

type AuthContextProps = {
  saveDiet: (diet: {
    refeicoes: Record<RefeicoesHorario, RefeicoesItem[]>;
    totais: {
      calories: number;
      proteins: number;
      carbohydrates: number;
    }
  }) => void;
};

type DietType = {
  refeicoes: Record<RefeicoesHorario, RefeicoesItem[]>;
  totais: {
    calories: number;
    proteins: number;
    carbohydrates: number;
  };
};