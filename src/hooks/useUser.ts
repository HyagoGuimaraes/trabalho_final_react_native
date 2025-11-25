import { useEffect, useState, useCallback } from "react";
import type { UserProfile, DailySummary } from "../@types/user";
import {
  fetchUserProfile,
  fetchTodaySummary,
  updateProfileAPI,
} from "../service/api";
import {
  loadUser,
  saveUser,
  loadDailySummary,
  saveDailySummary,
} from "../service/storage";

export function useUser() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [daily, setDaily] = useState<DailySummary | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bootstrap = async () => {
      setLoading(true);
      const cachedProfile = await loadUser();
      const cachedDaily = await loadDailySummary();

      if (cachedProfile) setProfile(cachedProfile);
      if (cachedDaily) setDaily(cachedDaily);

      if (!cachedProfile) {
        const apiProfile = await fetchUserProfile();
        setProfile(apiProfile);
        await saveUser(apiProfile);
      }

      const apiDaily = await fetchTodaySummary();
      setDaily(apiDaily);
      await saveDailySummary(apiDaily);

      setLoading(false);
    };
    bootstrap();
  }, []);

  const updateProfile = useCallback(
    async (partial: Partial<UserProfile>) => {
      if (!profile) return;
      const serverAck = await updateProfileAPI(partial);
      const next = { ...profile, ...serverAck };
      setProfile(next);
      await saveUser(next);
    },
    [profile]
  );

  return { profile, daily, loading, updateProfile };
}
