import { create } from 'zustand';

interface UserInfo {
  name: string;
  role: string;
}

interface AppState {
  isAuthenticated: boolean;
  user: UserInfo | null;
  login: (username: string) => void;
  logout: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (username: string) =>
    set({
      isAuthenticated: true,
      user: {
        name: username,
        role: '数据分析师',
      },
    }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));
