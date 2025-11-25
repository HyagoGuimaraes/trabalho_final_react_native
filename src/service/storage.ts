import AsyncStorage from "@react-native-async-storage/async-storage";
import type { UserProfile, DailySummary } from "../@types/user";

const KEYS = {
  user: "@dietapp_user",
  daily: "@dietapp_daily_summary",
};

export const saveUser = async (user: UserProfile | null) => {
  if (!user) return AsyncStorage.removeItem(KEYS.user);
  return AsyncStorage.setItem(KEYS.user, JSON.stringify(user));
};

export const loadUser = async (): Promise<UserProfile | null> => {
  const raw = await AsyncStorage.getItem(KEYS.user);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

export const saveDailySummary = async (summary: DailySummary | null) => {
  if (!summary) return AsyncStorage.removeItem(KEYS.daily);
  return AsyncStorage.setItem(KEYS.daily, JSON.stringify(summary));
};

export async function getUserStorage() {
  const user = await AsyncStorage.getItem("user"); // Diego- Chave corrigi para o user. 
  return user ? JSON.parse(user) : null;
}

export const loadDailySummary = async (): Promise<DailySummary | null> => {
  const raw = await AsyncStorage.getItem(KEYS.daily);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};
