import { create } from "zustand";

interface State {
  isSideMenuOpen: boolean;
  openSIdeMenu: () => void;
  closeSideMenu: () => void;
}

export const useUIStore = create<State>()((set) => ({
  isSideMenuOpen: false,
  openSIdeMenu: () => set({ isSideMenuOpen: true }),
  closeSideMenu: () => set({ isSideMenuOpen: false })
}));