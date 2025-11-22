export type DietaryPreference =
  | "vegetariano"
  | "vegano"
  | "sem_gluten"
  | "low_carb"
  | "sem_lactose"
  | "onivoro";

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  weightKg: number;
  goalWeightKg: number;
  dailyCaloriesGoal: number;
  dietaryPreferences: DietaryPreference[];
};

export type DailySummary = {
  dateISO: string;
  caloriesConsumed: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
};