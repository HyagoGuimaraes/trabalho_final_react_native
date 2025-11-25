import { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FoodResultsList } from "../../components/FoodResultsList";
import { FoodSearchInput } from "../../components/FoodSearchInput";
import { RefeicaoSelector } from "../../components/RefeicaoSelector";
import { SelectedFoodsList } from "../../components/SelectedFoodsList";
import { AuthContext } from "../../context/AuthContext";
import { searchFoodApi } from "../../service/api";
import { styles } from "./style";

const REFEICOES: { key: RefeicoesHorario; label: string }[] = [
    { key: 'cafe', label: 'Café da manhã' },
    { key: 'almoco', label: 'Almoço' },
    { key: 'tarde', label: 'Café da tarde' },
    { key: 'jantar', label: 'Jantar' },
    { key: 'ceia', label: 'Ceia' },
];

export const DietPage = () => {

    const { saveDiet } = useContext(AuthContext);

    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState<FoodItem[]>([]);
    const [selectedRefeicao, setSelectedRefeicao] = useState<RefeicoesHorario>('cafe');
    const [refeicaoState, setRefeicaoState] = useState<Record<RefeicoesHorario, RefeicoesItem[]>>({
        cafe: [],
        almoco: [],
        tarde: [],
        jantar: [],
        ceia: [],
    });

    const searchFood = async () => {
        if (!query.trim()) return;
        try {
            const foods = await searchFoodApi(query);
            setSearchResults(foods);
        } catch (error) {
            console.error('Erro ao buscar alimentos:', error);
        }
    };

    const addFoodToRefeicao = (item: FoodItem) => {
        const novoItem: RefeicoesItem = {
            horario: selectedRefeicao,
            alimento: item,
            quantidade: 1,
        };

        setRefeicaoState(prev => ({
            ...prev,
            [selectedRefeicao]: [...prev[selectedRefeicao], novoItem],
        }));
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Montar Dieta</Text>

                <FoodSearchInput
                    query={query}
                    setQuery={setQuery}
                    onSearch={searchFood}
                />

                <RefeicaoSelector
                    refeicoes={REFEICOES}
                    selected={selectedRefeicao}
                    onSelect={setSelectedRefeicao}
                />

                <FoodResultsList
                    results={searchResults}
                    onSelectItem={addFoodToRefeicao}
                />

                <SelectedFoodsList
                    refeicaoState={refeicaoState}
                    selectedRefeicao={selectedRefeicao}
                />

                <TouchableOpacity style={styles.button} onPress={() => saveDiet(refeicaoState)}>
                    <Text style={styles.buttonText}>Salvar Dieta</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};