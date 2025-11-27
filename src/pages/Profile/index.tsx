import { useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
  Alert,
  ActivityIndicator,
} from "react-native";
import { styles } from "./style";
import { useUser } from "../../hooks/useUser";
import type { DietaryPreference } from "../../@types/user";
import DismissKeyboard from "../../components/Keyboard/DismissKeyboard";

const PREF_OPTIONS: DietaryPreference[] = [
  "onivoro",
  "vegetariano",
  "vegano",
  "sem_gluten",
  "sem_lactose",
  "low_carb",
];

export default function Profile() {
  const { profile, daily, loading, updateProfile } = useUser();
  const [openEdit, setOpenEdit] = useState(false);
  const [name, setName] = useState(profile?.name ?? "");
  const [weight, setWeight] = useState(String(profile?.weightKg ?? ""));
  const [goal, setGoal] = useState(String(profile?.goalWeightKg ?? ""));
  const [prefs, setPrefs] = useState<DietaryPreference[]>(
    profile?.dietaryPreferences ?? []
  );

  const progress = useMemo(() => {
    if (!profile || !daily) return 0;
    const pct = daily.caloriesConsumed / profile.dailyCaloriesGoal;
    return Math.max(0, Math.min(1, pct));
  }, [profile, daily]);

  const onOpenEdit = () => {
    setName(profile?.name ?? "");
    setWeight(String(profile?.weightKg ?? ""));
    setGoal(String(profile?.goalWeightKg ?? ""));
    setPrefs(profile?.dietaryPreferences ?? []);
    setOpenEdit(true);
  };

  const togglePref = (p: DietaryPreference) => {
    setPrefs((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  };

  const onSave = async () => {
    const w = parseFloat(weight);
    const g = parseFloat(goal);

    if (!name.trim() || isNaN(w) || isNaN(g)) {
      Alert.alert("Campos inválidos", "Preencha nome, peso e meta corretamente.");
      return;
    }

    await updateProfile({
      name,
      weightKg: w,
      goalWeightKg: g,
      dietaryPreferences: prefs,
    });

    setOpenEdit(false);
    Alert.alert("Perfil atualizado", "Suas alterações foram salvas.");
  };

  if (loading || !profile || !daily) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loadingText}>Carregando seu perfil...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatar} />
          <View style={styles.headerInfo}>
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.email}>{profile.email}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Meta diária</Text>
          <Text style={styles.goalText}>{profile.dailyCaloriesGoal} kcal</Text>

          <View style={styles.progressBar}>
            <View
              style={[styles.progressFill, { width: `${progress * 100}%` }]}
            />
          </View>

          <Text style={styles.progressLabel}>
            Consumidas hoje: {daily.caloriesConsumed} kcal (
            {Math.round(progress * 100)}%)
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Peso</Text>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.label}>Atual</Text>
              <Text style={styles.value}>{profile.weightKg} kg</Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.label}>Meta</Text>
              <Text style={styles.value}>{profile.goalWeightKg} kg</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Preferências alimentares</Text>
          <View style={styles.tags}>
            {profile.dietaryPreferences.map((p) => (
              <View key={p} style={styles.tag}>
                <Text style={styles.tagText}>{p.replace("_", " ")}</Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          activeOpacity={0.8}
          onPress={onOpenEdit}
        >
          <Text style={styles.primaryButtonText}>Editar perfil</Text>
        </TouchableOpacity>
      </View>

      {/* -------- MODAL COM DismissKeyboard -------- */}
      <Modal visible={openEdit} animationType="slide" transparent>
        <View style={styles.modalBackdrop}>
          <DismissKeyboard>
            <View style={styles.modal}>
              <Text style={styles.modalTitle}>Editar perfil</Text>

              <Text style={styles.inputLabel}>Nome</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Seu nome"
                placeholderTextColor="#9CA3AF"
              />

              <View style={styles.row}>
                <View style={styles.col}>
                  <Text style={styles.inputLabel}>Peso atual (kg)</Text>
                  <TextInput
                    style={styles.input}
                    value={weight}
                    onChangeText={setWeight}
                    keyboardType="numeric"
                    placeholder="84"
                    placeholderTextColor="#9CA3AF"
                  />
                </View>

                <View style={styles.col}>
                  <Text style={styles.inputLabel}>Meta (kg)</Text>
                  <TextInput
                    style={styles.input}
                    value={goal}
                    onChangeText={setGoal}
                    keyboardType="numeric"
                    placeholder="78"
                    placeholderTextColor="#9CA3AF"
                  />
                </View>
              </View>

              <Text style={styles.inputLabel}>Preferências</Text>
              <FlatList
                data={PREF_OPTIONS}
                keyExtractor={(item) => item}
                numColumns={2}
                columnWrapperStyle={{ gap: 8 }}
                contentContainerStyle={{ gap: 8 }}
                renderItem={({ item }) => {
                  const active = prefs.includes(item);
                  return (
                    <TouchableOpacity
                      onPress={() => togglePref(item)}
                      activeOpacity={0.7}
                      style={[styles.prefItem, active && styles.prefItemActive]}
                    >
                      <Text
                        style={[styles.prefText, active && styles.prefTextActive]}
                      >
                        {item.replace("_", " ")}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />

              <View style={styles.modalActions}>
                <TouchableOpacity
                  style={styles.cancel}
                  onPress={() => setOpenEdit(false)}
                  activeOpacity={0.7}
                >
                  <Text style={styles.cancelText}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.save}
                  onPress={onSave}
                  activeOpacity={0.8}
                >
                  <Text style={styles.saveText}>Salvar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </DismissKeyboard>
        </View>
      </Modal>
      {/* -------------------------------------------- */}
    </SafeAreaView>
  );
}
