import { create } from "zustand";
import Cookies from "js-cookie";

interface GlobalState {
  sidebarState: boolean;
  isLoggedIn: boolean;
  user: string | null;
  toggleSidebar: () => void;
  toggleLogin: (status: boolean) => void;
  addUser: (user: string | null) => void;
}

const isBrowser = typeof window !== "undefined";

export const globalState = create<GlobalState>((set) => ({
  sidebarState: false,
  isLoggedIn: isBrowser ? !!Cookies.get("login") : false,
  user: isBrowser
    ? JSON.parse(localStorage.getItem("user") || '""')
    : null,

  toggleSidebar: () =>
    set((state) => ({ sidebarState: !state.sidebarState })),

  toggleLogin: (status) =>
    set(() => ({ isLoggedIn: status })),

  addUser: (userEmail) =>
    set(() => ({ user: userEmail })),
}));
