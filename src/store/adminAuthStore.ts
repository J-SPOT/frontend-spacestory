import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type State = {
  adminAccessToken: string | null;
};

type Actions = {
  setAdminAccessToken: (token: string) => void;
  getAdminAccessToken: () => string;
  clear: () => void;
};

const initialState = {
  adminAccessToken: null,
};

export const useAdminAuthStore = create(
  persist<State & Actions>(
    (set, get) => ({
      ...initialState,
      setAdminAccessToken: (token) =>
        set((state) => ({
          ...state,
          adminAccessToken: token,
        })),
      getAdminAccessToken: () => get().adminAccessToken || '',

      clear: () => {
        set(initialState);
      },
    }),
    {
      name: 'admin-auth-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
