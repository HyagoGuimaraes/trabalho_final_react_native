import axios from "axios";

export const baseUrl = "https://68dda582d7b591b4b78d02ee.mockapi.io/Native";
export const Api = axios.create({
  baseURL: baseUrl,
});

const API_KEY = "83b3fabbac834e97b27d2fe7521b360f";
const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";

type SpoonacularRecipe = {
  id: number;
  title: string;
  image: string;
  nutrition?: {
    nutrients: Array<{
      name: string;
      amount: number;
      unit: string;
    }>;
  };
};

export const searchFoodApi = async (query: string): Promise<FoodItem[]> => {
  try {
    const response = await axios.get<{ results: SpoonacularRecipe[] }>(
      BASE_URL,
      {
        params: {
          apiKey: API_KEY,
          query: query,
          number: 10,
          includeIngredients: query,
          addRecipeInformation: true,
          addRecipeNutrition: true,
        },
      }
    );

    console.log(response.data.results);

    return response.data.results
      .filter((item) => item.nutrition?.nutrients)
      .map((item) => {
        const getNutrient = (name: string) => {
          const nutrient = item.nutrition?.nutrients.find(
            (n) => n.name === name
          );
          return nutrient?.amount ?? 0;
        };

        return {
          id: String(item.id),
          name: item.title,
          calories: getNutrient("Calories"),
          proteins: getNutrient("Protein"),
          carbohydrates: getNutrient("Carbohydrates"),
          imageUrl: item.image,
        };
      });
  } catch (error) {
    console.error("Erro ao buscar no Spoonacular:", error);
    return [];
  }
};
