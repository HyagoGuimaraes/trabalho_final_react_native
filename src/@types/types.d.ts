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
  saveDiet: (diet: Record<RefeicoesHorario, RefeicoesItem[]>) => void;
};