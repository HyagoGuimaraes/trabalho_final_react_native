import type {
  UserProfile,
  DailySummary,
  DietaryPreference,
} from "../@types/user";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const fetchUserProfile = async (): Promise<UserProfile> => {
  await delay(400);
  const prefs: DietaryPreference[] = ["onivoro", "low_carb"];
  return {
    id: "u_001",
    name: "William Lippi",
    email: "lippiwilliam93@gmail.com",
    avatar: "https://i.pravatar.cc/180?img=12",
    weightKg: 84,
    goalWeightKg: 78,
    dailyCaloriesGoal: 2200,
    dietaryPreferences: prefs,
  };
};

export const fetchTodaySummary = async (): Promise<DailySummary> => {
  await delay(300);
  const today = new Date().toISOString().slice(0, 10);
  return {
    dateISO: today,
    caloriesConsumed: 1360,
    proteinG: 98,
    carbsG: 120,
    fatG: 55,
  };
};

export const updateProfileAPI = async (partial: Partial<UserProfile>) => {
  await delay(300);
  return partial;
};
