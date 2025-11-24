import axios from "axios";

export const baseUrl = "https://68dda582d7b591b4b78d02ee.mockapi.io/Native";

export const Api = axios.create({
    baseURL: baseUrl
})

const OPEN_FOOD_FACTS_URL = "https://world.openfoodfacts.org/api/v0/product/";

export const searchFoodApi = async (query: string): Promise<FoodItem[]> => {
    try {
        const response = await axios.get<{ products: OpenFoodFactsResponse[] }>
            (`https://world.openfoodfacts.org/cgi/search.pl`, {
                params: {
                    search_terms: query,
                    search_simple: 1,
                    action: "process",
                    json: 1
                },
            });

        return response.data.products
        .filter((item) => item.product_name && item.nutriments["energy-kcal_100g"])
        .map((item, index) => ({
            id: String(item._id ?? index),
            name: item.product_name || "Sem nome",
            calories: item.nutriments["energy-kcal_100g"] ?? 0,
        }));

    } catch (error) {
        console.error("Erro ao buscar no OpenFoodFacts:", error);
        return [];
    }
};